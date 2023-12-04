import { twMerge } from 'tailwind-merge'

const Modal = ({ open, className, children, modalRef, ...props }) => {
	return (
		<div
			ref={modalRef}
			className={twMerge(
				`z-10 p-2 absolute place-content-center place-items-center transform -translate-x-1/2 -translate-y-1/2 w-full h-full top-1/2 left-1/2 ${
					open ? 'flex' : 'hidden'
				}`,
				className
			)}
			{...props}>
			{children}
		</div>
	)
}

export default Modal
