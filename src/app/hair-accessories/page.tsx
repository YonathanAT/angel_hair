"use client";
import Image from 'next/image'; // Ensure you have this import at the top of your file
import { useState } from 'react';

export default function Hairaccessoriespage() {
    const [shoppingCart, setShoppingCart] = useState<any[]>([]); /*creates empty basket that holds anything*/
    const addCart = (item: any) => {
        setShoppingCart([...shoppingCart, item]);
        console.log("cart:", [...shoppingCart,item]);
    };
    // array of bundles 
    const hairaccessories = [
       { id: 1, name: "Hair clips", price: 29.99, image: "/assets/hairaccess1.jpg" },
       { id: 2, name: "Trendy clips", price: 15.99, image: "/assets/hairaccess2.jpg" },
       { id: 3, name: "Redken ", price: 16.99, image: "/assets/hairaccess3.jpg" },
       { id: 4, name: "Bonding ", price: 12.99, image: "/assets/hairaccess4.jpg" },
       { id: 5, name: "Studio shot of a beautiful young woman", price: 11.99, image: "/assets/hairaccess5.jpg" },
       { id: 6, name: "Trendy silk elastic band", price: 25.99, image: "/assets/hairaccess6.jpg" },
       { id: 7, name: "Pattern of hair clips", price: 22.99, image: "/assets/hairaccess7.jpg" },
       { id: 8, name: "Luxury hair clips on pink fabric", price: 3.99, image: "/assets/hairaccess8.jpg" },
       { id: 9, name: "Golden with pearls hairpin clip set", price: 3.99, image: "/assets/hairaccess9.jpg" },
    ];
    
    return (
       <main>
          <div className="flex flex-wrap gap-6">
            {hairaccessories.map((hairaccessory) => (
              <div 
                 key={hairaccessory.id}
                 className="flex items-center gap-6 border p-4 rounded-lg w-fit"
              >
                  <Image 
                    src={hairaccessory.image}
                    alt={hairaccessory.name}
                    width={190}
                    height={190}
                  />
                  <div>
                  <h2 className="text-xl font-semibold">{hairaccessory.name}</h2> 
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-lg font-bold text-yellow-500">
                      £{hairaccessory.price}
                    </p>
                   <button
                    onClick={() => addCart(hairaccessory)}
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