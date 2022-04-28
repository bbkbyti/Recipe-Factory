
const RecipeItem = (props) => {

    return(
        <>
        <div>
            <img src={props.image} alt={props.title} />
        </div>
        <div>
            <h3>{props.title}</h3>
        </div>
        <div>
            <button>Show Recipe Detail</button>
        </div>
        </>
    )
}
export default RecipeItem;