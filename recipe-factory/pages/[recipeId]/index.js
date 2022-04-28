
import { MongoClient, ObjectId } from 'mongodb';

import RecipeDetail from '../../components/recipes/RecipeDetail';

import { Fragment } from 'react';
import Head from 'next/head';


const RecipeDetailPage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.recipeData.title}</title>
                <meta
                    name='description'
                    content={props.recipeData.description}
                />
            </Head>
            <RecipeDetail
                title={props.recipeData.title}
                image={props.recipeData.image}
                description={props.recipeData.description}
            />
        </Fragment>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://bbkbyti:tYvMXx6W7f843fU4@cluster0.dnwbk.mongodb.net/recipe-factory?retryWrites=true&w=majority')

    const db = client.db();

    const recipesCollection = db.collection('recipes');

    const recipes = await recipesCollection.find({}, { _id: 1}).toArray();

    client.close();

    return {
        fallback: 'blocking',
        paths: recipes.map((recipe) => ({
            params: { recipeId: recipe._id.toString()}
        })),
    }
}

export async function getStaticProps(context) {

    const recipeId = context.params.recipeId;

    const client = await MongoClient.connect('mongodb+srv://bbkbyti:tYvMXx6W7f843fU4@cluster0.dnwbk.mongodb.net/recipe-factory?retryWrites=true&w=majority')

    const db = client.db();

    const recipesCollection = db.collection('recipes');

    const selectedRecipe = await recipesCollection.findOne({
        _id: ObjectId(recipeId),
    })

    client.close();

    return {
        props: {
            recipeData: {
                id: selectedRecipe._id.toString(),
                title: selectedRecipe.title,
                image: selectedRecipe.image,
                description: selectedRecipe.description,
            }
        }
    }
}

export default RecipeDetailPage;