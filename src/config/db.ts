import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const url = 'mongodb+srv://root:nEwBCLAtRWi5HoKS@cluster0.bvmeh.mongodb.net/linktree_node_typscript'
        const {connection} = await mongoose.connect(url)
        const url2 = `${connection.host}:${connection.port}`

        console.log(`MongooDB Conectado en ${url2}`)
    } catch (error) {
        console.log(error)
    }
}