import React, { useRef, useImperativeHandle } from 'react'
const CustomInput = React.forwardRef((props, ref) => {
	const inputRef = useRef()
	useImperativeHandle(ref, () => {
		return {
			focus: () => {
				inputRef.current.focus()
			},
		}
	})
	return (
		<div className={props.labelClass}>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				ref={inputRef}
				className={props.className}
				type={props.type}
				id={props.id}
				autoComplete='off'
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
			/>
		</div>
	)
})

export default CustomInput
