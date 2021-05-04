import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag'

const SINGLE_PRODUCT_QUERY = gql`
	query SINGLE_PRODUCT_QUERY($id: ID!) {
		Product(where: { id: $id }) {
			id
			name
			description
			price
		}
	}
`

const UPDATE_PRODUCT_MUTATION = gql`
	mutation UPDATE_PRODUCT_MUTATION(
		$id: ID!
		$name: String
		$description: String
		$price: Int
	) {
		updateProduct(
			id: $id
			data: { id: $id, name: $name, description: $description, price: $price }
		) {
			id
			name
			description
			price
		}
	}
`

export default function UpdateProduct({ id }) {
	// 1. Need to get existing product
	const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
		variables: { id: id },
	})
	console.log(data)
	// 2. Need to get the mutation to update product
	const [
		updateProduct,
		{ data: updateData, error: updateError, loading: updateLoading },
	] = useMutation(UPDATE_PRODUCT_MUTATION, {
		variables: {
			id: id,
			// Pass in updates to product here
		},
	})
	// 3. Need the form to handle the updates
	return <p>Update {id}!</p>
}
