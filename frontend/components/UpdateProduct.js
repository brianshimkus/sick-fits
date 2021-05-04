import { useQuery } from '@apollo/client'
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

export default function UpdateProduct({ id }) {
	// 1. Need to get existing product
	const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
		variables: { id: id },
	})
	console.log(data)
	// 2. Need to get the mutation to update product
	// 3. Need the form to handle the updates
	return <p>Update {id}!</p>
}
