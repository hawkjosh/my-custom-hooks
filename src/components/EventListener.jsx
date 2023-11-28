import { useState } from 'react'
import useEventListener from '@/hooks/useEventListener'

export default function EventListener() {
	const [key, setKey] = useState('')

	useEventListener('keydown', (e) => setKey(e.key))

	return (
		<div className='card'>
			<div className='card-title'>useEventListener</div>
			<div className='card-content'>
				<div className='flex items-center gap-2 sm:flex-col sm:gap-1 text-sm justify-center'>
					Last key pressed:
					<span
						className={`bg-yellow-400 text-gray-500 italic font-medium px-2 
						text-center ${key && 'text-red-600'}`}>
						{key ? key : '(press a key)'}
					</span>
				</div>
			</div>
		</div>
	)
}
