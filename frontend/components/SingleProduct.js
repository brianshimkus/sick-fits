import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import DisplayError from './ErrorMessage'
import Head from 'next/head'

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!) {
		Product(where: { id: $id }) {
			name
			price
			description
			id
			photo {
				altText
				image {
					publicUrlTransformed
				}
			}
		}
	}
`
export default function SingleProduct({ id }) {
	const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
		variables: {
			id: id,
		},
	})
	if (loading) return <p>Loading...</p>
	if (error) return <DisplayError error={error} />
	const { Product } = data
	return (
		<div>
			<Head>
				<title>Sick Fits | {Product.name}</title>
			</Head>
			<img
				src={Product.photo.image.publicUrlTransformed}
				alt={Product.photo.altText}
			/>
			<div className='details'>
				<h2>{data.Product.name}</h2>
				<p>{Product.description}</p>
			</div>
		</div>
	)
}
