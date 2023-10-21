import mongoose  from "mongoose";

const URI ='mongodb+srv://admin:q6uvpy6UchuxkPYv@admin.bby89at.mongodb.net/Marketplace?retryWrites=true&w=majority';

async function connectToDatabase() {
        return mongoose.connect(URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
        })
}
export {connectToDatabase};