/*           find all buttons in HTML           */

let countTasks = 0
const sortDownButton = document.querySelector('.btn-sort-position button')
const addButton = document.querySelector('.btn-add')
const list = document.querySelector('.task-list')
list.append(createTaskElement())
let order = 'SHUFFLE'

/*            adding event listeners            */

sortDownButton.addEventListener('click', () => {
	let data
	if (order === 'ASC') {
		order = 'DESC'
		data = sortUpArray()
		sortDownButton.classList.add('btn-sort-up')
		sortDownButton.classList.remove('btn-sort-down')
	} else {
		order = 'ASC'
		sortDownButton.classList.add('btn-sort-down')
		sortDownButton.classList.remove('btn-sort-up')
		data = sortDownArray()
	}
	list.innerHTML = ''
	countTasks = 0
	data.forEach((text) => list.append(createTaskElement(text)))
})

addButton.addEventListener('click', () => {
	list.append(createTaskElement())
})

function createTaskElement(text = '') {
	countTasks++
	let newDiv = document.createElement('div')
	let newInput = document.createElement('input')
	let newDeleteButton = document.createElement('button')
	newDiv.classList.add('input-delete-icon')
	newDeleteButton.classList.add('delete-icon')
	newDeleteButton.addEventListener('click', () => {
		console.log(countTasks)
		if (countTasks <= 1) {
			newInput.value = ''
		} else {
			newDiv.remove()
			countTasks--
		}
	})

	newInput.value = text
	newDiv.append(newInput, newDeleteButton)
	return newDiv
}

function sortDownArray() {
	const inputs = [...document.querySelectorAll('.task-list input')]
	const texts = inputs.map((input) => input.value)
	return texts.sort((a, b) => (a > b ? 1 : -1))
}

function sortUpArray() {
	const inputs = [...document.querySelectorAll('.task-list input')]
	const texts = inputs.map((input) => input.value)
	return texts.sort((a, b) => (a > b ? -1 : 1))
}
