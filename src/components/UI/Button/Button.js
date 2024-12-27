import handleRipple from '../Ripple/RIpple'
import classes from './Button.module.css'

const Button = props => {
	return (
		<button
			className={`${classes.button} ${props.className}`}
			type={props.type || 'button'}
			disabled={false || props.disabled}
			onClick={props.onClick}
			onPointerDown={handleRipple}
		>
			{props.children}
			<paper-ripple></paper-ripple>
		</button>
	)
}

export default Button
