
import { MongoClient } from 'mongodb';
import RecipesList from '../components/recipes/RecipesList';

import { Fragment } from 'react';
import Head from 'next/head';


const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Recipe Factory App</title>
                <meta
                    name='description'
                    content='Simple Recipe App Where You Can Share Your Recipe And Explore Recipes Added By Others'
                />
            </Head>
            <RecipesList recipes={props.recipes} />
        </Fragment>
    )

}

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://bbkbyti:tYvMXx6W7f843fU4@cluster0.dnwbk.mongodb.net/recipe-factory?retryWrites=true&w=majority')

    const db = client.db();

    const recipesCollection = db.collection('recipes');

    const recipes = await recipesCollection.find().toArray();

    client.close();

    return {
        props: {
            recipes: recipes.map(recipe => ({
                title: recipe.title,
                image: recipe.image,
                description: recipe.description,
                id: recipe._id.toString(),
                
            }))
        },
        revalidate: 1,
    }
}
export default HomePage;