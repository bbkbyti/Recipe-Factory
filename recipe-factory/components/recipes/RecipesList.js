
import Card from '../ui/Card';
import RecipeItem from './RecipeItem'

import classes from './RecipeList.module.css'

const RecipesList = (props) => {
    return (
        <ul className={classes.list}>
            <Card>
                {props.recipes.map((recipe) => (
                    <RecipeItem
                        key={recipe.id}
                        id={recipe.id}
                        image={recipe.image}
                        title={recipe.title}
                        ingredients={recipe.ingredients}
                    />
                ))}
            </Card>
        </ul>

    )
}
export default RecipesList;