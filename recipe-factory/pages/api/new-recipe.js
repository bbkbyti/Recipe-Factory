
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://bbkbyti:tYvMXx6W7f843fU4@cluster0.dnwbk.mongodb.net/recipe-factory?retryWrites=true&w=majority')

        const db = client.db();

        const recipesCollection = db.collection('recipes');

        const result = await recipesCollection.insertOne(data);
        console.log(result);

        client.close();

        res.status(201).json({ message: 'Recipe Inserted!'})
    }
}

export default handler;