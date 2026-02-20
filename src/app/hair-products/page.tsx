"use client";
import Image from 'next/image'; // Ensure you have this import at the top of your file
import { useState } from 'react';

export default function Hairproductpage() {
    const [shoppingCart, setShoppingCart] = useState<any[]>([]); /*creates empty basket that holds anything*/
    const addCart = (item: any) => {
        setShoppingCart([...shoppingCart, item]);
        console.log("cart:", [...shoppingCart,item]);
    };
    // array of bundles 
    const hairproducts = [
       { id: 1, name: "OGX Argan Oil", price: 29.99, image: "/assets/hairprod1.jpg" },
       { id: 2, name: "Mielle Rosemary Mint", price: 15.99, image: "/assets/hairprod2.jpg" },
       { id: 3, name: "Redken Extreme Shampoo", price: 16.99, image: "/assets/hairprod3.jpg" },
       { id: 4, name: "Olaplex No.7 Bonding Oil", price: 12.99, image: "/assets/hairprod4.jpg" },
       { id: 5, name: "Nature Spell Rosemary Oil", price: 11.99, image: "/assets/hairprod5.jpg" },
       { id: 6, name: "Hair gel", price: 25.99, image: "/assets/hairprod6.jpg" },
       { id: 7, name: "Curl cream", price: 22.99, image: "/assets/hairprod7.jpg" },
       { id: 8, name: "Styling cream", price: 3.99, image: "/assets/hairprod8.jpg" },
       { id: 9, name: "Edge control", price: 3.99, image: "/assets/hairprod9.jpg" },
    ];
    
    return (
       <main>
          <div className="flex flex-wrap gap-6">
            {hairproducts.map((hairproduct) => (
              <div 
                 key={hairproduct.id}
                 className="flex items-center gap-6 border p-4 rounded-lg w-fit"
              >
                  <Image 
                    src={hairproduct.image}
                    alt={hairproduct.name}
                    width={190}
                    height={190}
                  />
                  <div>
                  <h2 className="text-xl font-semibold">{hairproduct.name}</h2> 
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-lg font-bold text-yellow-500">
                      £{hairproduct.price}
                    </p>
                   <button
                    onClick={() => addCart(hairproduct)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                    >
                     Add to cart
                   </button>
                   </div>
                  </div>
                </div>
                ))}
          </div>
       </main>
    );
}