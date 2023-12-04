import { twMerge } from 'tailwind-merge'

const Input = ({
	type,
	label,
	name,
	value,
	onChange,
	placeholder,
	className,
}) => {
	return (
		<label
			htmlFor={name}
			className='flex flex-col gap-2 text-lg'>
			{label}:
			<input
				type={type || 'text'}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={twMerge(
					'flex py-1 uppercase bg-transparent border rounded-md cursor-pointer w-40 place-items-center place-content-center place-self-center hover:shadow-md hover:filter hover:brightness-110',
					className
				)}
			/>
		</label>
	)
}

export default Input
