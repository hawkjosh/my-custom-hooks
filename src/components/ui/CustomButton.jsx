const CustomButton = ({ className, children, onClick, ...props }) => {
	const baseClasses =
		'text-sm py-1 px-2 rounded-lg cursor-pointer transition-colors duration-300 disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed'

	const mergedClasses = `${baseClasses} ${className}`

	return (
		<button
			type='button'
			onClick={onClick}
			className={mergedClasses}
			{...props}>
			{children}
		</button>
	)
}

export default CustomButton
