import NProgress from 'nprogress'
import Page from '../components/Page'
import Router from 'next/router'
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

import '../components/styles/nprogress.css'

const client = new ApolloClient({
	link: createHttpLink({ uri: 'http://localhost:3000' }),
	cache: new InMemoryCache(),
})

export default function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Page>
				<Component {...pageProps} />
			</Page>
		</ApolloProvider>
	)
}
