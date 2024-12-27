import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import classes from './Home.module.css'

const Decorative = () => {
	return <div className={classes['decorative']}></div>
}

const HomeCard = props => {
	const [full, setFull] = useState(false)
	const [isMinimized, setMini] = useState(false)
	const [isMaximized, setMaxi] = useState(false)
	const minimizeHandler = e => {
		setMini(true)
		setFull(false)
		setMaxi(false)
	}
	const openHandler = () => {
		setMini(false)
		setFull(false)
		setMaxi(false)
	}
	const maximizeHandler = () => {
		setMaxi(true)
		setFull(false)
		setMini(true)
	}
	const fullHandler = () => {
		setFull(prevs => !prevs)
	}
	return (
		<>
			<Card
				className={`${classes['card']} ${isMinimized && `${classes['mini']}`} ${
					full && classes['full']
				} ${isMaximized && classes['maxi-transform']}`}
			>
				<div className={classes['apple-window-strap']}>
					<Button
						onClick={minimizeHandler}
						className={`${classes['apple-window-icons']} ${classes['blue']}`}
					></Button>
					<Button
						onClick={fullHandler}
						className={`${classes['apple-window-icons']} ${classes['green']}`}
					></Button>
					<Button
						onClick={maximizeHandler}
						className={`${classes['apple-window-icons']} ${classes['red']}`}
					></Button>
				</div>
				<h3 data-select>Attack On Titan </h3>
				<h3 data-select>Eren Yeager</h3>
				<h3 data-select>Mikasa Ackerman</h3>
				<h3 data-select>Armin Arlet</h3>
				<h3 data-select>Hange San</h3>
				<h3 data-select>Levi Ackerman</h3>
				<h3 data-select>Ervin Pixis</h3>
			</Card>

			{isMinimized && (
				<Button
					onClick={openHandler}
					className={`${classes['apple-window-strap']} ${classes['redo']}`}
				>
					<div
						className={`${classes['apple-window-icons']} ${
							isMaximized ? classes['red'] : classes['blue']
						}`}
					></div>
					<h3>{isMaximized ? 'Reopen' : 'Maximize'}</h3>
				</Button>
			)}
		</>
	)
}

const Home = props => {
	return ReactDOM.createPortal(<HomeCard />, document.getElementById('rooty'))
}

export default Home
