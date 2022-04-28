
import Card from '../ui/Card';
import RecipeItem from './RecipeItem'

const RecipesList = (props) => {
    return (
        <Card>
            {props.recipes.map((recipe) => (
                <RecipeItem
                    key={recipe.id}
                    id={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                />
            ))}
        </Card>
    )
}
export default RecipesList;