import { useContext } from 'react'
import './App.css'
import Input from './components/Form/Input/Input'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './components/store/auth-context'

function App() {
	const authCtx = useContext(AuthContext)

	return (
		<>
			<MainHeader />
			{!authCtx.isLoggedIn && <Input />}
			{authCtx.isLoggedIn && <Home />}
		</>
	)
}

export default App
