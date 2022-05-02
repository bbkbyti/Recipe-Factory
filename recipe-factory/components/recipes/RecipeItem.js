
import { useRouter } from "next/router";

import classes from './RecipeItem.module.css'
import Card from "../ui/Card";

const RecipeItem = (props) => {
    const router = useRouter();

    const showDetailHandler = () => {
        router.push('/' + props.id)
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                </div>
                <div className={classes.content}>
                    <p>{props.ingredients}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={showDetailHandler}>Show Recipe Detail</button>
                </div>
            </Card>
        </li>

    )
}
export default RecipeItem;