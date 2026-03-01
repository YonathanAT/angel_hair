import { NextApiRequest, NextApiResponse } from 'next'; 
import Stripe from 'stripe'; 
 const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-01-28.clover',// initializing stripe
    });

    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
        if (req.method === 'POST') {
            try {
                const { items } = req.body; //reads cart items sent from frontend
                const lineItems = items.map((item: any) => ({// this maps the cart items to the format required by Stripe's API, including price data and quantity
                    price_data: {
                        currency: 'gbp',
                        quantity: item.quantity || 1, 
                        product_data: {
                            name: item.name,
                        },
                    },
                    quantity: item.quantity,
                }));

                const session = await stripe.checkout.sessions.create({
                    payment_method_types: ['card'],
                    line_items: lineItems,
                    mode: 'payment',
                    success_url: `${req.headers.origin}/success`,
                    cancel_url: `${req.headers.origin}/cancel`,
                });

                res.status(200).json({ id: session.id });
            } catch (error) {
                res.status(500).json({ error: 'check out session failed' });
            }
        } else {
            res.setHeader('Allow', 'POST');
            res.status(405).end('Method Not Allowed');
        }
    }
    