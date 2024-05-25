import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getTotal } = useCart();
  return (
    <div>
      {cart.map((product) => (
        <div class="bg-gray-100 h-screen py-8" key={product.id}>
          <div class="container mx-auto px-4">
            <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="md:w-3/4">
                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                  <table class="w-full">
                    <thead>
                      <tr>
                        <th class="text-left font-semibold">Product</th>
                        <th class="text-center font-semibold">Price</th>
                        <th class="text-center font-semibold">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="py-4">
                          <div class="flex items-center">
                            <img
                              class="h-16 w-16 mr-4"
                              src={`${product.image}`}
                              alt="Product image"
                            />
                            <span class="font-semibold">{`${product.title}`}</span>
                          </div>
                        </td>
                        <td class="py-4">${`${product.price}`}</td>
                        <td class="py-4">{`${product.quantity}`}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="md:w-1/4">
                <div class="bg-white rounded-lg shadow-md p-6">
                  <h2 class="text-lg font-semibold mb-4">Summary</h2>
                  <hr class="my-2" />
                  <div class="flex justify-between mb-2">
                    <span class="font-semibold">Total</span>
                    <span class="font-semibold">${getTotal()}</span>
                  </div>
                  <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        // <div key={product.id}>
        //   <h3>{product.title}</h3>
        //   <p>Cantidad: {product.quantity}</p>
        //   <p>Precio: ${product.price}</p>
        // </div>
      ))}
      {/* {cart.length ? (
        <>
          <h3>Total: ${getTotal()}</h3>{" "}
          <Link to="/checkout">Finalizar compra</Link>{" "}
        </>
      ) : (
        <p className=" py-52 text-xl text-bold">Tu carrito está vacio 😭</p>
      )} */}
    </div>
  );
};

export default Cart;
