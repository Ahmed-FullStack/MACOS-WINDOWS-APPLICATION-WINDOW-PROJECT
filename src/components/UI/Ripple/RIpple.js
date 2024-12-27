import { useState } from 'react'
import classes from './Ripple.module.css'

export default function handleRipple(e) {
	const btn = e.target
	const btnRect = e.target.getBoundingClientRect()
	const paperRipple = btn.querySelector(`paper-ripple`)
	const ripple = document.createElement(`div`)
	ripple.classList.add(`${classes['ripple-style']}`)
	ripple.classList.add(`${classes['ripple-animation']}`)
	ripple.style.setProperty(`--x`, `${e.clientX - btnRect.x}px`)
	ripple.style.setProperty(`--y`, `${e.clientY - btnRect.y}px`)
	paperRipple.appendChild(ripple)
	function handleRemoveRipple() {
		ripple.classList.add(`${classes['ripple-opacity-animation']}`)
		setTimeout(() => {
			ripple.remove()
		}, 530)
	}
	btn.addEventListener(`pointerup`, handleRemoveRipple, { once: true })
	btn.addEventListener(`pointerleave`, handleRemoveRipple, { once: true })
}
