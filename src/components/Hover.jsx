import { useRef } from 'react'
import useHover from '@/hooks/useHover'

export default function Hover() {
	const elementRef = useRef()
	const hovered = useHover(elementRef)

	return (
		<div className='card'>
			<div className='card-title'>useHover</div>
			<div className='card-content relative'>
				<div
					ref={elementRef}
					className={`w-[8rem] aspect-square absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
						hovered ? 'bg-blue-600' : 'bg-red-600'
					}`}
				/>
			</div>
		</div>
	)
}
