import instance from "../config/razorpay.js";

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100), // amount in paisa
    currency: "INR",
  };

  const order = await instance.orders.create(options);
  res.status(200).json({ success: true, order });
};