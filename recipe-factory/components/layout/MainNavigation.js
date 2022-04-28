
import Link from 'next/link';

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return(
<header className={classes.header}>
    <div className={classes.logo}>Recipe Factory</div>
    <nav>
        <ul>
            <li>
                <Link href='/'>All Recipes</Link>
            </li>
            <li>
                <Link href='/new-recipe'>Add New Recipe</Link>
            </li>
        </ul>
    </nav>
</header>
    )
}
export default MainNavigation;