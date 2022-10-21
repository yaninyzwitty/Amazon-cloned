import Product from "./Product"
// first method ..you download the image and then use it instead of using the link one
// deleting it completely 
// using it but then wrapping it in a div wihich you may apply tailwind styles
// confirm the mx-auto
function ProductFeed({ products }) {
  return (
    <div className=" grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        
        {products
        .slice(0, 4)
        .map(({id, title, price, description, category, image}) => (
          <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}

           />
          
        ))}
        <img 
        src={"https://links.papareact.com/dyz"}
        className="md:col-span-full" 
        alt="" />

        {/* <img 
        className="md:col-span-full"
        src="https://links.papareact.com/dyz" 
        alt=""
        /> */}

{/* so that when it is one item then it will cover the full width  ..more research to be done*/}
        <div className="md:col-span-2 ">
        {products.slice(4, 5)
        .map(({id, title, price, description, category, image}) => (
          <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}

           />
          
        ))}

        </div>
        {products
        .slice(5, products.length)
        .map(({id, title, price, description, category, image}) => (
          <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}

           />
          
        ))}

    </div>
  )
}

export default ProductFeed