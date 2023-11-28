import EventListener from '@/components/EventListener'
import WindowSize from '@/components/WindowSize'
import Hover from '@/components/Hover'
import Array from '@/components/Array'

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

				<div className='card'>
					<span className='text-yellow-400 italic flex place-content-center place-items-center h-full font-extrabold'>
						( Card Placeholder )
					</span>
				</div>
				<div className='card'>
					<span className='text-yellow-400 italic flex place-content-center place-items-center h-full font-extrabold'>
						( Card Placeholder )
					</span>
				</div>
				<div className='card'>
					<span className='text-yellow-400 italic flex place-content-center place-items-center h-full font-extrabold'>
						( Card Placeholder )
					</span>
				</div>
				<div className='card'>
					<span className='text-yellow-400 italic flex place-content-center place-items-center h-full font-extrabold'>
						( Card Placeholder )
					</span>
				</div>
			</div>
		</main>
	)
}
