import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

export const instance = new Razorpay({
  key_id: process.env.PAYMENT_API_KEY,
  key_secret: process.env.PAYMENT_API_SECRET,
});

export const checkout = async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: Number(amount * 100), // amount in paise
    currency: "INR",
    receipt: "receipt_" + Date.now(),
  };

  try {
    const order = await instance.orders.create(options);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Order creation failed", error);
    res.status(500).json({
      success: false,
      message: "Order creation failed",
    });
  }
};
