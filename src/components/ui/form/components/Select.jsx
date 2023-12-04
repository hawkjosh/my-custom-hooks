import { twMerge } from 'tailwind-merge'

const Select = ({
	label,
	name,
	options,
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
			<select
				name={name}
				value={value}
				onChange={onChange}
				className={twMerge(
					'flex py-1 pe-8 uppercase bg-transparent border rounded-md cursor-pointer w-fit place-items-center place-content-center place-self-center hover:shadow-md hover:filter hover:brightness-110',
					className
				)}>
				<option
					value=''
					disabled
					className='italic font-semibold text-gray-400'>
					{placeholder}
				</option>
				{options.map((option, index) => (
					<option
						key={index}
						value={option.value}
						className='text-gray-900'>
						{option.label || option.value}
					</option>
				))}
			</select>
		</label>
	)
}

export default Select
