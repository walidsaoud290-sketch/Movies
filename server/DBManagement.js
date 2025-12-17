import mongoose from 'mongoose'
export async function connectMongoDB() {
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:'moviesDB'
        })
        console.log("Connected to MongoDB successfuly")
    }catch(e){
        console.error(e)
        process.exit(1);
    }
}
