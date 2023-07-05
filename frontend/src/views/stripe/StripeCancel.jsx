import React from 'react';
import "./Stripe.scss";

const StripeCancel = () => {
    return (
        <main className='paymentBox'>
            <h2>Payment Cancelled </h2>
            <h3>Please check your bank account and then  try again.</h3>
            <h3>Contact our customer services team if you have any questions</h3>
        </main>
    )
}

export default StripeCancel;