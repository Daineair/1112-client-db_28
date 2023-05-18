import { useState, useEffect } from 'react';
const Shop2Page_28 = () => {
  const [products, setProducts ] = useState([]);

  const getShop2_28 = async () => {
    try{
      const response = await fetch(`https://jiewhttktusvivcyqnki.supabase.co/rest/v1/shop2_28?select=*`, {
        method: 'GET',
        headers: {
          apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppZXdodHRrdHVzdml2Y3lxbmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODc5MTAsImV4cCI6MTk5ODA2MzkxMH0.Hu3m_m1VKVZ22aFHQt6sB-t5fgHCzlnCOvjC_DFaTzU`,
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppZXdodHRrdHVzdml2Y3lxbmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODc5MTAsImV4cCI6MTk5ODA2MzkxMH0.Hu3m_m1VKVZ22aFHQt6sB-t5fgHCzlnCOvjC_DFaTzU`
        }
      });
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
      <h1 className="title">All Products -- Supabase shop2</h1>
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

export default Shop2Page_28;
