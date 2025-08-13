import ItemProducts from "./ItemProducts";

const products = [
    { title: "Col", id: 1 },
    { title: "Ajo", id: 2 },
    { title: "Manzana", id: 3 },
  ];

const ListProducts = () => {
  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map(({id,title}) => (
          <ItemProducts key={id} title={title} id={id} />
        ))}
      </ul>
    </>
  )
}

export default ListProducts