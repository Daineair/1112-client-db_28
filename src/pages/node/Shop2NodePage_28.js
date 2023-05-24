import { useState, useEffect } from 'react';
const Shop2NodePage_28 = () => {
  const [products, setProducts ] = useState([]);

  const getShop2_28 = async () => {
    try{
      const response = await fetch(`http://localhost:5000/api/crown2_28/shop2_28`);
      const data = await response.json();
      console.log('shop2 data', data);
      setProducts(data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getShop2_28();
  }, []);

  return (
    <div className="shop-page">
      <div className="collection-page">
      <h1 className="title">All Products -- Node shop2</h1>
      <div className="items">
        {products.map( (product) => {
          const {id, name, price , local_url} = product;
          return (
            <div className="collection-item" key={id}>
            <img className="image" src={local_url} />
            <div className="collection-footer">
              <span className="name">{name}</span>
              <span className="price">{price}</span>
            </div>
            <button className="custom-button">Add to Cart</button>
          </div>
          )
        })}
         
      </div>
      </div>
    </div>
  );
}

export default Shop2NodePage_28;
