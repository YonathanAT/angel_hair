"use client";
import { useState } from 'react';


// checkout function that sends the cart items to the backend API for processing the payment with Stripe
export default function CheckoutPage() {
    
    const  checkout = async () => {
        const response = await fetch('/api/checkout/stripe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: shoppingCart }),
        });
        const data = await response.json();
        console.log("checkout session:", data);
      };
   return(
     <button
       onClick={checkout}
       className="bg-black text-white px-4 py-2 rounded"
>
       Pay Now
     </button>
   );
}