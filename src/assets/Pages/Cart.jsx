import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import Nav from "../../component/Nav";
import Footer1 from "../../component/Footer1";
import Footer2 from "../../component/Footer2";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const checkOut = () => {
    navigate("/checkout", dispatch(clearCart()));
  };
  console.log(cart)
  

  return (
    <>
      <Nav />
      <div className="bg-white  flex flex-col min-h-screen">
        <div className="flex flex-row items-center justify-around">
          {/* Container for the cart items */}
          <div className="w-[70%] flex items-center">
            <div className="">
              <div className="card bg-white min-h-96  flex items-center shadow-xl">
                <h1 className="ml-12 text-2xl  items-center text-black">Shopping Cart</h1>
                <hr />
                <br />
                {cart.length===0?(
                  <p>Your Cart is empty</p>
                ):(
                  <div className="overflow-x-hidden ">
                  {cart.map((item) => (
                  
                  <div
                    key={item.id}
                    className="mb-4 shadow-3xl w-42 grid grid-cols-1"
                  >
                    <figure className="h-52">
                      <img
                        src={item.images}
                        alt={item.title}
                        className="rounded-xl h-52 w-52"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-black">{item.title}</h2>
                      <p className="text-black">
                        Price per unit: ${item.price.toFixed(2)}
                      </p>
                      <p className="text-black">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <button
                          className="btn btn-warning"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="text-black">{item.quantity}</span>
                        <button
                          className="btn btn-warning"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="card-actions">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Remove from Cart
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}


                  </div>
                 
                )}
                
              </div>
            </div>
          </div>
          {/* Container for the subtotal and checkout button */}
          <div className="w-[30%] flex justify-center">
            <div>
              <div className="card text-black w-fit h-fit bg-white shadow-lg">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">
                    Subtotal (
                    {cart.reduce((total, item) => total + item.quantity, 0)}{" "}
                    items): $
                    {cart
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </h2>
                  <div className="card-actions justify-end">
                    <Link>
                      <button className="btn btn-warning" onClick={checkOut}>
                        Proceed to checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 />
        <Footer2 />
      </div>
    </>
  );
}

export default Cart;
