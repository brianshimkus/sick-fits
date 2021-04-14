import { useState } from 'react'

export default function useForm(initial = {}) {
	// Create a state object for inputs
	const [inputs, setInputs] = useState(initial)

	function handleChange(e) {
		let { value, name, type } = e.target
		if (type === 'number') {
			value = parseInt(value)
		}
		if (type === 'file') {
			value[0] = e.target.files
		}
		setInputs({
			// Copy existing state
			...inputs,
			// Update existing state
			[name]: value,
		})
	}

	function resetForm() {
		setInputs(initial)
	}

	function clearForm() {
		const blankState = Object.fromEntries(
			Object.entries(inputs).map(([key, value]) => [key, ''])
		)
		setInputs(blankState)
	}

	// Return from custom hook
	return {
		inputs,
		handleChange,
		resetForm,
		clearForm,
	}
}
