import Head from "next/head";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import ProductFeed from "../../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto">

      <Banner />
      {/* Product section */}
      <ProductFeed products={products}/>
      </main>

 
    </div>
  );
}
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products`)
  const products = await res.json()

  // Pass data to the page via props
  return { props: { products } }
}