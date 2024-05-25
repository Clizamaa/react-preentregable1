import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getTotal } = useCart();
  return cart.length ? (
    <>
      <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              {cart.map((product) => (
                <div
                  className="bg-white rounded-lg shadow-md p-6 mb-4"
                  key={product.id}
                >
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left font-semibold">Product</th>
                        <th className="text-center font-semibold">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src={`${product.image}`}
                              alt="Product image"
                            />
                            <span className="font-semibold">{`${product.title}`}</span>
                          </div>
                        </td>
                        <td className="py-4">${`${product.price}`}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${getTotal()}</span>
                </div>
                <Link
                  to="/checkout"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <p className=" py-52 text-xl text-bold">Tu carrito está vacio 😭</p>
  );
};

export default Cart;
