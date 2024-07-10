import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Nav() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="navbar bg-base-100 text-white">
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
            <li>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="">
                  <p>Account & List</p>
                </div>
              </div>
            </li>
            <li className="btn text-white">Return & Orders</li>
            <li className="btn  text-white">
              <Link to={'/Cart'}>
                <img
                  src="https://img.icons8.com/?size=100&id=0DBkCUANmgoQ&format=png&color=FFFFFF"
                  alt=""
                  className="h-10"
                />
                <h3 className="text-red-300">{cart.length}</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
