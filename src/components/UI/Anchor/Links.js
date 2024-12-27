import handleRipple from '../Ripple/RIpple'
export default function Link(props) {
	return (
		<a onPointerDown={handleRipple} href={props.href}>
			{props.children}
			<paper-ripple></paper-ripple>
		</a>
	)
}
