"use client";
import Image from 'next/image'; 
import { useRouter } from 'next/navigation';// navigation
import { useCart } from '@/context/shopcarcontext';// cart context
import { CartItem } from '../checkout/page';
import { useState } from 'react';

export default function BundlesPage() {
  const { addCart } = useCart();
  const router = useRouter(); 
  
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
    
    // array of bundles 
    const bundles = [
       { id: 1, name: "Body-Wave", price: 299, quantity:0 , image: "/assets/bundle2.jpg" },
       { id: 2, name: "Deep-Wave", price: 159, quantity:0 , image: "/assets/bundle3.jpg" },
       { id: 3, name: "Loose-Wave", price: 169, quantity:0 , image: "/assets/bundle4.jpg" },
       { id: 4, name: "Natural-Wave", price: 129, quantity:0 , image: "/assets/bundle5.jpg" },
       { id: 5, name: "Straight-Wave", price: 99, quantity:0 , image: "/assets/bundle6.jpg" },
       { id: 6, name: "Colored-Wave", price: 259, quantity:0 , image: "/assets/bundle7.jpg" },
       { id: 7, name: "100 raw human hair", price: 299, quantity:0 , image: "/assets/bundle8.jpg" },
       { id: 8, name: "cuticle-intact", price: 399, quantity:0 , image: "/assets/bundle9.jpg" },
    ];
    const handleAddToCart = (bundle: CartItem, qty: number) => {
      addCart(bundle, qty);
      router.push("/checkout");
    };
  
    return (
      <main className="flex flex-wrap gap-6">
  
        {bundles.map((bundle) => {
  
          const qty = quantities[bundle.id] || 1;
  
          return (
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
  
                  <input
                    type="number"
                    min="1"
                    value={qty}
                    onChange={(e) =>
                      setQuantities({
                        ...quantities,
                        [bundle.id]: Number(e.target.value),
                      })
                    }
                    className="w-16 p-1 border rounded"
                  />
  
                  <button
                    onClick={() => handleAddToCart(bundle, qty)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    Add to cart
                  </button>
  
                </div>
              </div>
  
            </div>
          );
        })}
  
      </main>
    );
  }