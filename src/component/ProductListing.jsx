import React from 'react';
import './Product.scss';

const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/i7/8972/1650533655232/front-view-118.jpg?tr=w-664'},
    { id: 2, name: 'Product 2', price: '$20', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Range-Rover-Velar-2023/10584/1689741801024/side-view-(left)-90.jpg?tr=w-664' },
    { id: 3, name: 'Product 3', price: '$30', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-664' },
    { id: 1, name: 'Product 4', price: '$10', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X5-2023/10452/1688992642182/front-left-side-47.jpg?imwidth=420&impolicy=resize'},
    { id: 2, name: 'Product 5', price: '$20', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/Cayenne-2024/9903/Porsche-Cayenne-2024-/1681882894783/front-left-side-47.jpg?imwidth=420&impolicy=resize' },
  ];

const ProductListing = () => {
  return (
    <section className="product-listing">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <img src={product.image} alt=''/>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductListing;