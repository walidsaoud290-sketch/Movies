import crypto from 'crypto';
import axios from 'axios';

// ================= CONFIGURATION =================
const CONFIG = {
    key: "player",
    baseUrl: "https://netusa.xyz",
    versions: ['4', '5'],
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36",
        "Origin": "https://netusa.xyz"
    }
};

// ================= CRYPTO HELPERS =================
const CryptoUtils = {
    deriveKey(password, salt) {
        return crypto.pbkdf2Sync(password, salt, 1000, 32, 'sha256');
    },

    encrypt(payload) {
        try {
            const salt = crypto.randomBytes(8);
            const iv = crypto.randomBytes(12);
            const key = this.deriveKey(CONFIG.key, salt);

            const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
            const encrypted = Buffer.concat([cipher.update(payload, 'utf8'), cipher.final()]);
            const tag = cipher.getAuthTag();
            const finalCiphertext = Buffer.concat([encrypted, tag]);

            return `${salt.toString('hex')}-${iv.toString('hex')}-${finalCiphertext.toString('hex')}`;
        } catch (error) {
            console.error("[Crypto] Encryption failed:", error.message);
            return null;
        }
    },

    decrypt(encryptedHex) {
        try {
            const parts = encryptedHex.split('-');
            if (parts.length !== 3) throw new Error("Invalid cipher format");

            const salt = Buffer.from(parts[0], 'hex');
            const iv = Buffer.from(parts[1], 'hex');
            const fullCiphertext = Buffer.from(parts[2], 'hex');

            // Split Tag (last 16 bytes) from Ciphertext
            const tagLength = 16;
            const ciphertext = fullCiphertext.subarray(0, fullCiphertext.length - tagLength);
            const tag = fullCiphertext.subarray(fullCiphertext.length - tagLength);

            const key = this.deriveKey(CONFIG.key, salt);
            const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
            decipher.setAuthTag(tag);

            return Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('utf8');
        } catch (error) {
            console.error("[Crypto] Decryption failed:", error.message);
            return null;
        }
    }
};

// ================= CORE LOGIC =================
/**
 * Processes a single version for a given video ID
 */
async function processVersion(videoId, version) {
    try {
        console.log(`[*] Processing ID: ${videoId} (Version: ${version})`);

        // 1. Generate Payload
        const expiry = Math.floor(Date.now() / 1000) + 86400; // 24h validity
        const payload = `${videoId}+1+${version}+${expiry}`;

        // 2. Encrypt
        const encryptedToken = CryptoUtils.encrypt(payload);
        if (!encryptedToken) return null;

        // 3. Request
        const targetUrl = `${CONFIG.baseUrl}/get/${encryptedToken}`;
        // Note: Headers need dynamic Referer based on version
        const dynamicHeaders = {
            ...CONFIG.headers,
            "Referer": `https://netusa.xyz/watch/?v${version}1`
        };

        const { data } = await axios.get(targetUrl, { headers: dynamicHeaders });

        // 4. Decrypt Response
        // API usually returns { info: "..." } or { link: "..." }
        const encryptedLink = data.info || data.link;
        if (!encryptedLink) {
            console.warn(`[!] No encrypted info found for v${version}`);
            return null;
        }

        const decryptedPath = CryptoUtils.decrypt(encryptedLink);
        if (!decryptedPath) return null;

        // 5. Build Final URL
        const pathId = decryptedPath.split('-')[0];
        let finalUrl = '';

        if (version === '4') finalUrl = `https://vidsrc.xyz/embed/${pathId}`;
        else if (version === '5') finalUrl = `https://strmup.cc/${pathId}`;

        console.log(`[+] Success (v${version}): ${finalUrl}`);
        return { version, url: finalUrl };

    } catch (error) {
        console.error(`[!] Failed (v${version}): ${error.message}`);
        return null;
    }
}

// ================= PUBLIC API =================
/**
 * Scrapes all available versions for a video ID
 * @param {string} videoId 
 * @returns {Promise<Array>} Array of { version, url } objects
 */
export async function getEmbeds(videoId) {
    if (!videoId) throw new Error("Video ID is required");

    // Map versions to promises and run them in parallel
    const promises = CONFIG.versions.map(version => processVersion(videoId, version));

    // Wait for all to finish
    const results = await Promise.all(promises);

    const test = results[0]['url']


    // Filter out failed attempts (nulls)
    return test//results.filter(r => r !== null);
}