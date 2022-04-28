
import RecipeItem from './RecipeItem'

const RecipesList = (props) => {
    return (
        <>
            {props.recipes.map((recipe) => (
                <RecipeItem
                    key={recipe.id}
                    id={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                />
            ))}
        </>
    )
}
export default RecipesList;