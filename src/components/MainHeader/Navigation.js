import { useContext } from 'react'
import AuthContext from '../store/auth-context'
import classes from './Navigation.module.css'
import Link from '../UI/Anchor/Links'

const Navigation = props => {
	const authCtx = useContext(AuthContext)
	const logOutHandler = () => {
		authCtx.onLogOut()
	}
	return (
		<ul
			className={
				!authCtx.isLoggedIn
					? classes['nav__list']
					: `${classes['face-down']} ${classes['nav__list']}`
			}
		>
			<li className={classes.cursor}>
				<Link>Home</Link>
			</li>
			<li className={classes.cursor} onClick={logOutHandler}>
				<Link>Log Out</Link>
			</li>
			<li className={classes.cursor}>
				<Link>About</Link>
			</li>
		</ul>
	)
}

export default Navigation
