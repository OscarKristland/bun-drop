import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import LocalStorage from './LocalStorage';

function Menu() {
    const [allProducts, setAllProducts] = useState([]);
    //När jag ska referera till ett specifict objekt i local storage och jag vill komma åt det bör jag använda useRef();

    //Localstorage
    // const [name, setName] = useLocalStorage("name", "");

    useEffect(() => {
    fetch("http://localhost:7000/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

    return (
        <div>
            <div className='product-container'>
                {allProducts?.map((p) => (
                    <ProductCard 
                        key={p.id}
                        name={p.name}
                        price={p.price}
                        description={p.description}
                        image={p.image}
                        id={p.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menu;