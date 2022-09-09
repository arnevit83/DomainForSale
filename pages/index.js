import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Domain for Sale</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header title="Domain for sale!" />
				<p className="description">
					This domain is for sale. $500. contact arnevit@pm.me
				</p>
			</main>

			<Footer />
		</div>
	);
}
