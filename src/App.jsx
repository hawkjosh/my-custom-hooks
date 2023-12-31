import { Card, CardPlaceholder } from '@/components/ui/Card'

import EventListener from '@/components/EventListener'
import WindowSize from '@/components/WindowSize'
import Hover from '@/components/Hover'
import Array from '@/components/Array'
import ClickOutside from '@/components/ClickOutside'
import LocalStorage from '@/components/LocalStorage'
import Toggle from '@/components/Toggle'

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
				<Card
					title='useLocalStorage'
					content={<LocalStorage />}
					relative
				/>
				<Card
					title='useToggle'
					content={<Toggle />}
					relative
				/>

				<CardPlaceholder />
			</div>
		</main>
	)
}
