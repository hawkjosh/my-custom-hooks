import { forwardRef } from 'react'

const classNames = (...classes) => classes.filter(Boolean).join(' ')

const Modal = forwardRef(({ open, className, children, ...props }, ref) => {
	const baseStyles = `z-10 p-4 absolute place-content-center place-items-center transform -translate-x-1/2 -translate-y-1/2 w-full h-full top-1/2 left-1/2 ${
		open ? 'flex' : 'hidden'
	}`

	return (
		<div
			ref={ref}
			className={classNames(baseStyles, className)}
			{...props}>
			{children}
		</div>
	)
})

export default Modal
