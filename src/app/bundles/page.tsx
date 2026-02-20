"use client";
import Image from 'next/image'; // Ensure you have this import at the top of your file
import { useState } from 'react';

export default function BundlesPage() {
    const [shoppingCart, setShoppingCart] = useState<any[]>([]); /*creates empty basket that holds anything*/
    const addCart = (item: any) => {
        setShoppingCart([...shoppingCart, item]);
        console.log("cart:", [...shoppingCart,item]);
    };
    // array of bundles 
    const bundles = [
       { id: 1, name: "Body-Wave", price: 299, image: "/assets/bundle2.jpg" },
       { id: 2, name: "Deep-Wave", price: 159, image: "/assets/bundle3.jpg" },
       { id: 3, name: "Loose-Wave", price: 169, image: "/assets/bundle4.jpg" },
       { id: 4, name: "Natural-Wave", price: 129, image: "/assets/bundle5.jpg" },
       { id: 5, name: "Straight-Wave", price: 99, image: "/assets/bundle6.jpg" },
       { id: 6, name: "Colored-Wave", price: 259, image: "/assets/bundle7.jpg" },
       { id: 7, name: "100 raw human hair", price: 299, image: "/assets/bundle8.jpg" },
       { id: 8, name: "cuticle-intact", price: 399, image: "/assets/bundle9.jpg" },

    ];
    
    return (
       <main>
          <div className="flex flex-wrap gap-6">
            {bundles.map((bundle) => (
              <div 
                 key={bundle.id}
                 className="flex items-center gap-6 border p-4 rounded-lg w-fit"
              >
                  <Image 
                    src={bundle.image}
                    alt={bundle.name}
                    width={190}
                    height={190}
                  />
                  <div>
                  <h2 className="text-xl font-semibold">{bundle.name}</h2> 
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-lg font-bold text-yellow-500">
                      £{bundle.price}
                    </p>
                  <button
                    onClick={() => addCart(bundle)}
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