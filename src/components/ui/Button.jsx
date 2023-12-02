import { forwardRef } from 'react'

const classNames = (...classes) => classes.filter(Boolean).join(' ')

const Button = forwardRef(({ label, className, children, ...props }, ref) => {
	const baseStyles =
		'flex items-center justify-center cursor-pointer transition-all duration-300 disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed'

	return (
		<button
			ref={ref}
			type='button'
			className={classNames(baseStyles, className)}
			{...props}>
			{label || children}
		</button>
	)
})

export default Button
