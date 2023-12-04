import { Card, CardPlaceholder } from '@/components/ui/Card'

import EventListener from '@/components/EventListener'
import WindowSize from '@/components/WindowSize'
import Hover from '@/components/Hover'
import Array from '@/components/Array'
import ClickOutside from '@/components/ClickOutside'

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
				<Card
					title='useEventListener'
					content={<EventListener />}
					relative
				/>
				<Card
					title='useWindowSize'
					content={<WindowSize />}
					relative
				/>
				<Card
					title='useHover'
					content={<Hover />}
					relative
				/>
				<Card
					title='useArray'
					content={<Array />}
				/>
				<Card
					title='useClickOutside'
					content={<ClickOutside />}
					relative
				/>

				<CardPlaceholder />
				<CardPlaceholder />
				<CardPlaceholder />
			</div>
		</main>
	)
}
