import React, { useEffect } from "react";
import "./Stripe.scss";
import { useNavigate } from "react-router-dom";

const StripeSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, 5000);

  return (
    <main className="boxAlignment">
      <section className="paymentBox">
        <h2>Payment Success! </h2>
        <h3>We are now processing your order</h3>
      </section>
    </main>
  );
};

export default StripeSuccess;
