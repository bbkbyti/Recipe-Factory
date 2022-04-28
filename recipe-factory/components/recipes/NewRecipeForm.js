
import { useRef } from 'react';

import classes from './NewRecipeForm.module.css';
import Card from '../ui/Card'

const NewRecipeForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const recipeData = {
            title: enteredTitle,
            image: enteredImage,
            description: enteredDescription,
        }
        props.onAddRecipe(recipeData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Dish Name</label>
                <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Image</label>
                <input type='url' required id='image' ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Recipe Description</label>
                <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Recipe</button>
            </div>
        </form>
        </Card>
        
    )
}
export default NewRecipeForm;