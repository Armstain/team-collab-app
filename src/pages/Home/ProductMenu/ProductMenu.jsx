import {
  FaComments,
  FaCalendarAlt,
  FaEnvelope,
  FaVideo,
  FaWikipediaW,
} from "react-icons/fa";
import { BsDatabase, BsFileText } from "react-icons/bs";
import { SiOpenaccess } from "react-icons/si";

const ProductMenu = () => {
  const products = [
    { name: "Messenger", icon: <FaComments className="text-blue-500" /> },
    { name: "Base", icon: <BsDatabase className="text-purple-500" /> },
    { name: "Docs", icon: <BsFileText className="text-blue-500" /> },
    { name: "Calendar", icon: <FaCalendarAlt className="text-orange-500" /> },
    { name: "Email", icon: <FaEnvelope className="text-yellow-500" /> },
    { name: "Meetings", icon: <FaVideo className="text-teal-500" /> },
    { name: "Wiki", icon: <FaWikipediaW className="text-blue-500" /> },
    { name: "Open Platform", icon: <SiOpenaccess className="text-blue-500" /> },
  ];

  return (
    <div className="bg-white py-6 mt-14">
      <div className=" mx-auto gap-4 bg-gradient-to-b from-blue-100 to-gray-100">
        {/* Promo Banner */}
        <div className="mb-8 flex justify-center  items-center gap-5  p-6  text-white">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl p-7 w-2/5 shadow-md drop-shadow-md border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-semibold shadow-inner">
                UN
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Username
                </h3>
                <span className="text-gray-500">Taskirsview</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="bg-blue-500 text-white px-6 py-2.5 rounded-3xl text-sm font-medium hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md">
                Launch Lark
              </button>
              <button className="bg-white text-blue-600 px-6 py-2.5 rounded-3xl text-sm font-medium border border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                Lark Web
              </button>
            </div>
          </div>

          {/* Get Started Card */}
          <div className="bg-gradient-to-r from-blue-600 w-2/5 to-blue-300 drop-shadow-md rounded-2xl p-6  text-white shadow-lg">
            <div className="flex justify-between items-start relative z-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Get Started</h2>
                <p className="text-blue-100 text-lg mb-4">with Lark</p>
                <p className="text-blue-100 max-w-md">
                  The productivity Superapp
                  <br />
                  all businesses need
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Menu */}
        <div className="grid grid-cols-5 md:grid-cols-8 py-4 mx-10 bg-white rounded-t-2xl ">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-5 h-12 flex items-center justify-center">
                {product.icon}
              </div>
              <span className="text- text-gray-700">{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;
