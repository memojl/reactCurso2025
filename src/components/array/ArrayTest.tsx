
const products = [
    { title: "Col", id: 1 },
    { title: "Ajo", id: 2 },
    { title: "Manzana", id: 3 },
  ];

const ArrayTest = () => {
  return (
     <>
      <h2>Products</h2>
      <ul>
        {products.map((x) => (
          <li key={x.id}>{x.title}</li>
        ))}
      </ul>
    </>
  )
}

export default ArrayTest