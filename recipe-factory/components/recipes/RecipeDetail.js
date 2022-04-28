
import classes from './RecipeDetail.module.css';

const RecipeDetail = (props) => {
    return(
        <section className={classes.detail}>
            <img src={props.image} alt={props.title}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </section>
    )
}
export default RecipeDetail;