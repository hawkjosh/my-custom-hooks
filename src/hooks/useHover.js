import { useEffect, useState } from 'react'

export default function useHover(ref) {
	const [hovered, setHovered] = useState(false)

	useEffect(() => {
		const handleMouseOver = () => setHovered(true)
		const handleMouseOut = () => setHovered(false)

		const element = ref.current

		if (element) {
			element.addEventListener('mouseover', handleMouseOver)
			element.addEventListener('mouseout', handleMouseOut)

			return () => {
				element.removeEventListener('mouseover', handleMouseOver)
				element.removeEventListener('mouseout', handleMouseOut)
			}
		}
	}, [ref])

	return hovered
}
