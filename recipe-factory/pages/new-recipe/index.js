
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NewRecipeForm from '../../components/recipes/NewRecipeForm'



const NewRecipePage = () => {
    const router = useRouter();

    async function addRecipeHandler(newData) {
        const response = await fetch('/api/new-recipe', {
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json();
        console.log(data);
        
        router.push('/');
    }


    return (
        <Fragment>
            <Head>
                <title>Add a New Recipe</title>
                <meta
                    name='description'
                    content='Add your recipe'
                />
            </Head>
            <NewRecipeForm onAddRecipe={addRecipeHandler} />
        </Fragment>
    )
}
export default NewRecipePage;