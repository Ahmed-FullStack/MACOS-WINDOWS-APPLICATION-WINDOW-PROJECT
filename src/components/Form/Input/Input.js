import React, {
	useCallback,
	useContext,
	useEffect,
	useReducer,
	useRef,
	useState,
} from 'react'
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button'
import classes from './Input.module.css'
import CustomInput from '../CustomInput/CustomInput'
import AuthContext from '../../store/auth-context'

const ACTIONS = {
	USER_INPUT: 'USER_INPUT',
	USER_BLUR: 'USER_BLUR',
}

const emailReducer = (emailState, action) => {
	switch (action.type) {
		case ACTIONS.USER_INPUT:
			return {
				isValid: action.value.includes('@'),
				valueOfEmail: action.value,
			}
		case ACTIONS.USER_BLUR:
			return {
				isValid: emailState.valueOfEmail.includes('@'),
				valueOfEmail: emailState.valueOfEmail,
			}
		default:
			return emailState
	}
}
const passwordReducer = (passwordState, action) => {
	switch (action.type) {
		case ACTIONS.USER_INPUT:
			return {
				isValid: action.value.trim().length > 6,
				valueOfPassword: action.value,
			}
		case ACTIONS.USER_BLUR:
			return {
				isValid: passwordState.valueOfPassword.trim().length > 6,
				valueOfPassword: passwordState.valueOfPassword,
			}
		default:
			return passwordState
	}
}

const Input = props => {
	const authCtx = useContext(AuthContext)
	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		isValid: undefined,
		valueOfEmail: '',
	})
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		isValid: undefined,
		valueOfPassword: '',
	})

	const emailRef = useRef()
	const passwordRef = useRef()

	const [formIsValid, setFormValid] = useState(false)
	const isEmailValid = emailState.isValid
	const isPasswordValid = passwordState.isValid

	const emailHandler = useCallback(e => {
		dispatchEmail({ type: ACTIONS.USER_INPUT, value: e.target.value })
	}, [])
	const emailBlurHandler = e => {
		dispatchEmail({ type: ACTIONS.USER_BLUR })
	}
	const passwordHandler = e => {
		dispatchPassword({ type: ACTIONS.USER_INPUT, value: e.target.value })
	}
	const passwordBlurHandler = e => {
		dispatchPassword({ type: ACTIONS.USER_BLUR })
	}
	const onFormValidation = e => {
		e.preventDefault()
		if (formIsValid) {
			authCtx.onLogIn()
		} else if (!isEmailValid) {
			emailRef.current.focus()
		} else if (!isPasswordValid) {
			passwordRef.current.focus()
		}
	}
	useEffect(() => {
		const identifier = setTimeout(() => {
			setFormValid(isEmailValid && isPasswordValid)
		}, 500)

		return () => {
			clearTimeout(identifier)
		}
	}, [isEmailValid, isPasswordValid])
	return (
		<form onSubmit={onFormValidation} className={classes['full-height']}>
			<Card className={classes.form}>
				<CustomInput
					ref={emailRef}
					className={classes.input}
					label='Email'
					labelClass={classes['label-fields']}
					id='email'
					type='email'
					autoComplete='off'
					value={emailState.valueOfEmail}
					onChange={emailHandler}
					onBlur={emailBlurHandler}
				/>
				<CustomInput
					ref={passwordRef}
					className={classes.input}
					label='Password'
					labelClass={classes['label-fields']}
					id='password'
					type='password'
					autoComplete='off'
					value={passwordState.valueOfPassword}
					onChange={passwordHandler}
					onBlur={passwordBlurHandler}
				/>

				<div className={classes['button-holder']}>
					<Button type='submit' className={classes.btn}>
						Login
					</Button>
				</div>
			</Card>
		</form>
	)
}
export default Input
