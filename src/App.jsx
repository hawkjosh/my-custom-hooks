import EventListener from '@/components/EventListener'
import WindowSize from '@/components/WindowSize'
import Hover from '@/components/Hover'
import Array from '@/components/Array'

import ArrayUpdate from '@/components/ArrayUpdate'

export default function App() {
	return (
		<main>
			<div className='app-header'>
				<div className='app-title'>My Custom Hooks</div>
				<div className='app-subtitle'>
					A collection of custom React hooks designed by yours truly!
				</div>
			</div>
			<div className='app-grid'>
				<EventListener />
				<WindowSize />
				<Hover />
				<Array />

				<ArrayUpdate />

				<div className='card'>
					<span className='flex h-full italic font-extrabold text-yellow-400 place-content-center place-items-center'>
						( Card Placeholder )
					</span>
				</div>
				<div className='card'>
					<span className='flex h-full italic font-extrabold text-yellow-400 place-content-center place-items-center'>
						( Card Placeholder )
					</span>
				</div>
				<div className='card'>
					<span className='flex h-full italic font-extrabold text-yellow-400 place-content-center place-items-center'>
						( Card Placeholder )
					</span>
				</div>
			</div>
		</main>
	)
}
