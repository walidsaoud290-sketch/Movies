import React from 'react';

// You would typically fetch this data based on an ID from the URL

const WatchPage = ({title}) => {
    const MOCK_MOVIE = {
    title: title,
    src: "https://vidsrc.xyz/embed/movie/1477594", // Example embed
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    rating: "8.8",
    year: "2010"
};
    return (
        <div style={styles.pageContainer}>

            {/* 1. The Cinema Container: Limits max width so it doesn't look stretched on 4k screens */}
            <div style={styles.cinemaContainer}>

                {/* 2. The Aspect Ratio Wrapper */}
                <div style={styles.videoWrapper}>
                    <iframe
                        src={MOCK_MOVIE.src}
                        title={MOCK_MOVIE.title}
                        style={styles.iframe}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* 3. Info Area */}
                <div style={styles.infoArea}>
                    <div style={styles.metaRow}>
                        <h1 style={styles.title}>{MOCK_MOVIE.title}</h1>
                        <div style={styles.badges}>
                            <span style={styles.badge}>{MOCK_MOVIE.year}</span>
                            <span style={{ ...styles.badge, backgroundColor: '#e50914' }}>{MOCK_MOVIE.rating}</span>
                        </div>
                    </div>
                    <p style={styles.description}>{MOCK_MOVIE.description}</p>
                </div>

            </div>
        </div>
    );
};

// CSS Styles (Move these to a separate .css or module.css file in production)
const styles = {
    pageContainer: {
        backgroundColor: '#0f0f0f', // Deep dark background
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
    },
    cinemaContainer: {
        width: '100%',
        maxWidth: '1200px', // Don't let the video get absurdly wide
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },
    videoWrapper: {
        position: 'relative',
        width: '100%',
        // THIS IS THE KEY: Modern CSS for fixed aspect ratio
        aspectRatio: '16 / 9',
        backgroundColor: '#000', // Placeholder color while loading
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    },
    iframe: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    infoArea: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '0 10px',
    },
    metaRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap', // Prevents breaking on mobile
    },
    title: {
        fontSize: '2rem',
        margin: 0,
        fontWeight: '700',
    },
    badges: {
        display: 'flex',
        gap: '10px',
    },
    badge: {
        padding: '4px 8px',
        backgroundColor: '#333',
        borderRadius: '4px',
        fontSize: '0.9rem',
        fontWeight: '600',
    },
    description: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#ccc', // Slightly muted text for readability
        maxWidth: '800px', // Measure: text is hard to read if lines are too long
    }
};

export default WatchPage;