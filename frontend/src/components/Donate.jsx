import React, { useState } from "react";
import axios from "axios";

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    setDisableBtn(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/payment/checkout`,
        { amount: amount },
        { withCredentials: true }
      );

      const options = {
        key: "rzp_test_1ndsPffNFAzqiV",
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Poors Donation",
        description: message || "Thank you for your support!",
        order_id: data.order.id,
        handler: function (response) {
          alert("Payment Successful!");
          console.log("Payment ID:", response.razorpay_payment_id);
        },
        prefill: {
          name,
          email,
          contact: 9999999999,
        },
        notes: {
          message,
        },
        theme: {
          color: "#0a66c2",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong! Try again.");
    } finally {
      setDisableBtn(false);
    }
  };

  return (
    <section className="donate">
      <form onSubmit={handleCheckout}>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <label>Show your love for Poors</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Donation Amount (INR)"
          />
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="btn" disabled={disableBtn}>
          Donate {amount ? `₹${amount}` : "₹0"}
        </button>
      </form>
    </section>
  );
};

export default Donate;
