import { or, serverTimestamp } from "firebase/firestore";
import { useCart } from "../context/CartContext";
import { createOrder } from "../firebase/db";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CheckOutForm = () => {
  const { cart, getTotal } = useCart();
  const MySwal = withReactContent(Swal);

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

    MySwal.fire({
      title: "Order created",
      icon: "success",
      text: "Your order has been created successfully",
    });
  };

  return (
    <div className="container mx-auto p4-10 py-16">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full px-6 py-8 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
            <p className="mt-4 text-gray-600">
              Please fill out the form below to complete your purchase.
            </p>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  className="block text-gray-800 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-800 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-800 font-bold mb-2"
                  htmlFor="Phone"
                >
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="number"
                  placeholder="569789456"
                  required
                />
              </div>
              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Buy!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutForm;
