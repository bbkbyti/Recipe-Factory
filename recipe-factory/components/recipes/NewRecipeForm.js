
import { useRef } from 'react';

const NewRecipeForm = () => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        console.log(enteredTitle)
        console.log(enteredImage);
        console.log(enteredDescription);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Dish Name</label>
                <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input type='url' required id='image' ref={imageInputRef} />
            </div>
            <div>
                <label htmlFor="description">Recipe Description</label>
                <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div>
                <button>Add Recipe</button>
            </div>
        </form>
    )
}
export default NewRecipeForm;