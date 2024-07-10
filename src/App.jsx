import React, { useState, useEffect } from 'react';
import Carousel from './component/Carousel';
import Footer1 from './component/Footer1';
import Footer2 from './component/Footer2';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/cartSlice';
import OurServises from './component/OurServises';
import WhyUs from './component/WhyUs';
import AboutUs from './component/AboutUs';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const fetch = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    const filteredProducts = response.data.products.filter(
      (product) => product.images && product.images.length > 0
    );
    setProducts(filteredProducts);
    console.log(filteredProducts);
  };
  useEffect(() => {
    fetch();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // alert("item added to cart ");
  };

  return (
    <>
      <div className="navbar bg-base-100 text-white sticky top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          {/* =================================================================== */}
          <div>
            <Link to={'/'}>
              <img
                src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png"
                alt=""
                className="h-9"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <label className="bg-white input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className=" w-96 bg-white text-black"
                  placeholder="Search Amazon"
                  onChange={handleSearch}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70 text-black"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </li>
            <li>
              <select className="select select-ghost w-full max-w-xs bg-base-100 ml-3">
                <option disabled selected className="bg-base-100">
                  language
                </option>
                <option className="bg-base-100">EN</option>
                <option className="bg-base-100">AR</option>
              </select>
            </li>
            <li></li>
            <Link to="/Login">
              <li className="btn text-white">Logout</li>
            </Link>

            <li className="btn text-white">
              <Link to={'/Cart'}>
                <img
                  src="https://img.icons8.com/?size=100&id=0DBkCUANmgoQ&format=png&color=FFFFFF"
                  alt=""
                  className="h-10"
                />
                <span className="absolute top-0 right-2 bg-red-500 rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* ================================== */}

      <div className="bg-slate-200 flex flex-wrap gap-4 justify-center">
        <Carousel></Carousel>
        <OurServises />
        <div className="flex flex-wrap justify-center gap-6">
          {filterProducts.map((product) => (
            <div
              key={product.id}
              class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              {product.images && product.images.length > 0 ? (
                <div>
                  <Link to={`/ProductPage/${product.id}`}>
                    <img
                      src={product.images}
                      alt="Product"
                      class="h-80 w-72 object-cover rounded-t-xl"
                    />{' '}
                  </Link>

                  <div class="px-4 py-3 w-72">
                    <span class="text-gray-400 mr-3 uppercase text-xs">
                      {product.brand}
                    </span>
                    <p class="text-lg font-bold text-black truncate block capitalize">
                      {product.title}
                    </p>
                    <div class="flex items-center">
                      <p class="text-lg font-semibold text-black cursor-auto my-3">
                        {product.price}{' '}
                      </p>
                      <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">
                          $199
                        </p>
                      </del>
                      <button
                        className="ml-auto btn btn-warning text-black"
                        onClick={() => handleAddToCart(product)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-bag-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading</p>
              )}
            </div>
          ))}
        </div>
        <AboutUs />
        <WhyUs />
      </div>

      <Footer1></Footer1>
      <Footer2 />
    </>
  );
}

export default App;
