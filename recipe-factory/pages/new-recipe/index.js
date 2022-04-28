
import NewRecipeForm from '../../components/recipes/NewRecipeForm'


const addRecipeHandler = (enteredData) => {
    console.log(enteredData)
}
const NewRecipePage = () => {
    return(
        <NewRecipeForm onAddRecipe={addRecipeHandler} />
    )
}
export default NewRecipePage;