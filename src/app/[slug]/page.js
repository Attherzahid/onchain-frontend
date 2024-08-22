import { notFound } from 'next/navigation';
import DefalutSec from '../sections/DefaultSec';
import { Footer, Header } from '../components';

export default async function Page({ params }) {
    const { slug } = params;

    // Fetch the data for the page from WordPress
    const res = await fetch(`https://onchaincapital.es/wp-json/wp/v2/pages?slug=${slug}`);
    const data = await res.json();
    const page = data.length ? data[0] : null;

    // If no page is found, return a 404
    if (!page) {
        notFound();
    }

    const cleanedContent = page.content.rendered.replace(/class="[^"]*"/g, '');

    return (

        <>
            <Header />
            <main>
                <DefalutSec>
                    <h1 className='h2 gradient-text'>{page.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: cleanedContent }} />
                </DefalutSec>
            </main>

            <Footer />
        </>
    );
}

export async function generateStaticParams() {
    const res = await fetch('http://local.onchain-backend.com/wp-json/wp/v2/pages');
    const pages = await res.json();

    return pages.map((page) => ({
        slug: page.slug,
    }));
}
