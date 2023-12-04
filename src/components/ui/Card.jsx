const Card = ({ title, content, relative }) => {
	return (
		<div className='card'>
			<div className='card-title'>{title}</div>
			<div className={`card-content ${relative && 'relative'}`}>{content}</div>
		</div>
	)
}

const CardPlaceholder = () => {
	return (
		<div className='bg-gray-500 border-yellow-500 card'>
			<div className='text-yellow-500 card-title'>Card Title</div>
			<div className='italic font-extrabold text-yellow-400 card-content'>
				( Card Content Here )
			</div>
		</div>
	)
}

export { Card, CardPlaceholder }
