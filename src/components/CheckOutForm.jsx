import { serverTimestamp } from "firebase/firestore";
import { useCart } from "../context/CartContext";
import { createOrder } from "../firebase/db";

const CheckOutForm = () => {
  const { cart, getTotal } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    const [name, mail, phone] = e.target;

    const order = {
      buyer: {
        name: name.value,
        mail: mail.value,
        phone: phone.value,
      },
      total: getTotal(),
      items: cart,
      date: serverTimestamp(),
    };
    createOrder(order);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Phone" required />
        <input type="text" placeholder="Address" required />
        <button type="submit">Crear compra</button>
      </form>
    </div>
  );
};

export default CheckOutForm;
