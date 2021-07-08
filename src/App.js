import { useState } from 'react'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import './App.css'

function App() {
	const [selectedPuppy, setSelectedPuppy] = useState('puppy1.jpeg')

	function handleClick(e, data) {
		setSelectedPuppy(data.image)
	}

	return (
		<div className='container'>
			<h2>Right click to change image</h2>
			<ContextMenuTrigger id='same_unique_identifier'>
				<img src={selectedPuppy} alt='puppy' />
			</ContextMenuTrigger>

			<ContextMenu id='same_unique_identifier'>
				<MenuItem data={{ image: 'puppy1.jpeg' }} onClick={handleClick}>
					Puppy Image 1
				</MenuItem>
				<MenuItem divider />
				<MenuItem data={{ image: 'puppy2.jpeg' }} onClick={handleClick}>
					Puppy Image 2
				</MenuItem>
				<MenuItem divider />
				<MenuItem data={{ image: 'puppy3.jpeg' }} onClick={handleClick}>
					Puppy Image 3
				</MenuItem>
			</ContextMenu>
		</div>
	)
}

export default App
