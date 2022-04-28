
import RecipesList from '../components/recipes/RecipesList';

const DUMMY_DATA = [
    {
        id: 'a1',
        title: 'Ghormeh Sabzi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5HIHcx77V2nDYky5c6SmfanBFNccyve4vg&usqp=CAU',
        description: 'Share how to cook this delicious food here!'
    },
    {
        id: 'a2',
        title: 'Turkish Eggplant Dolmah',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzaGhQYTyuiM5Myq5W0RoG75eAQHObUVUjlQ&usqp=CAU',
        description: 'Share how to cook this delicious food here!'
    }
]

const HomePage = () => {
    return (
        <RecipesList recipes={DUMMY_DATA} />
    )
}
export default HomePage;