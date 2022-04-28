
import { useRouter } from "next/router";

const RecipeItem = (props) => {
    const router = useRouter();

    const showDetailHandler = () => {
        router.push('/' + props.id)
    }

    return (
        <>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <button onClick={showDetailHandler}>Show Recipe Detail</button>
            </div>
        </>
    )
}
export default RecipeItem;