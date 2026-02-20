"use client";
import Image from 'next/image'; // Ensure you have this import at the top of your file
import { useState } from 'react';

export default function Humanhairspage() {
    const [shoppingCart, setShoppingCart] = useState<any[]>([]); /*creates empty basket that holds anything*/
    const addCart = (item: any) => {
        setShoppingCart([...shoppingCart, item]);
        console.log("cart:", [...shoppingCart,item]);
    };
    // array of bundles 
    const humanhairs = [
       { id: 1, name: "Straight white", price: 299, image: "/assets/humanhair1.jpg" },
       { id: 2, name: "Loose beach waves", price: 159, image: "/assets/humanhair2.jpg" },
       { id: 3, name: "Defined S-shaped waves", price: 169, image: "/assets/humanhair3.jpg" },
       { id: 4, name: "Strong waves", price: 129, image: "/assets/humanhair4.jpg" },
       { id: 5, name: "Loose curls", price: 99, image: "/assets/humanhair5.jpg" },
       { id: 6, name: "Colored-Wave", price: 259, image: "/assets/humanhair6.jpg" },
       { id: 7, name: "100 raw human hair", price: 299, image: "/assets/humanhair7.jpg" },
       { id: 8, name: "Soft coils with visible curl pattern", price: 399, image: "/assets/humanhair8.jpg" },
       { id: 9, name: "Red", price: 399, image: "/assets/humanhair9.jpg" },
    ];
    
    return (
       <main>
          <div className="flex flex-wrap gap-6">
            {humanhairs.map((humanhair) => (
              <div 
                 key={humanhair.id}
                 className="flex items-center gap-6 border p-4 rounded-lg w-fit"
              >
                  <Image 
                    src={humanhair.image}
                    alt={humanhair.name}
                    width={190}
                    height={190}
                  />
                  <div>
                  <h2 className="text-xl font-semibold">{humanhair.name}</h2> 
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-lg font-bold text-yellow-500">
                      £{humanhair.price}
                    </p>
                   <button
                    onClick={() => addCart(humanhair)}
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