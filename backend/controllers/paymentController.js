import Stripe from "stripe";

const postPayment = async (req, res, next) => {
    try{
        const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: "EUR",
                        product_data: {
                            name: "LisaConsult Services"
                        },
                        unit_amount: +req.body.total *100
                    },
                    quantity: 1
                }
            ],
            success_url:`http://localhost:3000/stripe-success`,
            cancel_url: `http://localhost:3000/stripe-cancel`
        });

        return res.json({url: session.url})
    }catch(err){
        return res.status(500).json({err: err.message})
    }
}

export default postPayment;

