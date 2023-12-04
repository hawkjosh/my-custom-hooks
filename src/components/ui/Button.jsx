import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Button = forwardRef(
	({ label, btnType, btnStyle, className, children, ...props }, ref) => {
		return (
			<button
				ref={ref}
				type={btnType || 'button'}
				className={twMerge(
					'uppercase px-2 py-1 border w-fit rounded-md flex place-items-center place-content-center place-self-center cursor-pointer transition-all duration-300 hover:shadow-md hover:filter hover:brightness-105',
					className,
					btnStyle === 'open' && 'hover:bg-green-500 hover:border-green-500',
					btnStyle === 'close' && 'hover:bg-red-500 hover:border-red-500',
					btnStyle === 'special' &&
						'hover:text-yellow-300 hover:bg-blue-400 hover:border-blue-400',
					btnStyle === 'icon' &&
						'absolute text-3xl p-1 border-none rounded-full hover:transform hover:scale-125 hover:shadow-none hover:filter-none',
					props.disabled &&
						'text-gray-400 bg-gray-200 border-gray-200 cursor-not-allowed hover:bg-gray-200 hover:border-gray-200 hover:shadow-none hover:filter-none'
				)}
				{...props}>
				{label || children}
			</button>
		)
	}
)

export default Button
