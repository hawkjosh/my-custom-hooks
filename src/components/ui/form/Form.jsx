import { twMerge } from 'tailwind-merge'

const Form = ({ handleFormSubmit, className, children }) => {
	return (
		<form
			onSubmit={handleFormSubmit}
			className={twMerge('', className)}>
			{children}
		</form>
	)
}

export default Form
