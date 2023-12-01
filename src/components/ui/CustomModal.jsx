import { forwardRef } from 'react'

const CustomModal = forwardRef(({ open, className, children }, ref) => {
	const baseClasses = `p-4 absolute place-content-center place-items-center transform -translate-x-1/2 -translate-y-1/2 w-full h-full top-1/2 left-1/2 ${
		open ? 'flex' : 'hidden'
	}`

	const mergedClasses = `${baseClasses} ${className}`

	return (
		<div
			ref={ref}
			className={mergedClasses}>
			{children}
		</div>
	)
})

export default CustomModal
