import Navigation from './Navigation'
import classes from './MainHeader.module.css'
const MainHeader = props => {
	return (
		<header>
			<nav className={classes.nav}>
				<h3>A Typical Page</h3>
				<Navigation />
			</nav>
		</header>
	)
}

export default MainHeader
