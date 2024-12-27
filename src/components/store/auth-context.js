import React, { useState, useEffect } from 'react'
const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogIn: () => {},
	onLogOut: () => {},
})

export const AuthContextProvider = props => {
	const [isLoggedIn, setLoggedIn] = useState(false)
	useEffect(() => {
		const localStorageObject = localStorage.getItem('log')
		if (localStorageObject === 'he') {
			setLoggedIn(true)
		}
	}, [])
	const setisLoggedIn = (password, email) => {
		setLoggedIn(true)
		localStorage.setItem('log', 'he')
	}
	const logOutHandler = () => {
		setLoggedIn(false)
		localStorage.removeItem('log')
	}
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogIn: setisLoggedIn,
				onLogOut: logOutHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
