// import { useState } from "react";
// import { Google, Apple } from "@mui/icons-material";
// import QrCode2Icon from "@mui/icons-material/QrCode2";

// const LoginForm = () => {
//   const [loginMethod, setLoginMethod] = useState("email");

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Left side - Login Form */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-4">
//         <div className="max-w-md w-full">
//           <div className="bg-white rounded-xl p-8 relative">
//             {/* QR Code Button */}
//             <div className="absolute top-0 right-0 p-4">
//               <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200">
//                 <QrCode2Icon />
//               </button>
//             </div>

//             {/* Logo and Title */}
//             <div className="mb-8">
//               <h1 className="text-2xl font-bold text-gray-800 mb-2">
//                 Welcome to Lark
//               </h1>
//             </div>

//             {/* Login Method Toggle */}
//             <div className="flex mb-6">
//               <button
//                 className={`mr-4 ${
//                   loginMethod === "email" ? "text-blue-600" : "text-gray-500"
//                 }`}
//                 onClick={() => setLoginMethod("email")}
//               >
//                 Email Address
//               </button>
//               <button
//                 className={`${
//                   loginMethod === "phone" ? "text-blue-600" : "text-gray-500"
//                 }`}
//                 onClick={() => setLoginMethod("phone")}
//               >
//                 Phone Number
//               </button>
//             </div>

//             {/* Login Form */}
//             <form className="space-y-4">
//               {loginMethod === "phone" && (
//                 <div className="flex">
//                   <select className="w-24 px-3 py-2 border border-gray-300 rounded-lg mr-2">
//                     <option>+880</option>
//                     {/* Add more country codes as needed */}
//                   </select>
//                   <input
//                     type="tel"
//                     placeholder="Enter your phone number"
//                     className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
//                   />
//                 </div>
//               )}

//               {loginMethod === "email" && (
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                 />
//               )}

//               <button
//                 type="submit"
//                 className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
//               >
//                 Next
//               </button>

//               <div className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 <span className="text-sm text-gray-600">
//                   I have read and accept the{" "}
//                   <a href="#" className="text-blue-600">
//                     Terms of Service
//                   </a>{" "}
//                   and{" "}
//                   <a href="#" className="text-blue-600">
//                     Privacy Policy
//                   </a>
//                 </span>
//               </div>
//             </form>

//             {/* Divider */}
//             <div className="my-6 text-center text-sm text-gray-500">
//               More Login Options
//             </div>

//             {/* SSO Options */}
//             <div className="space-y-3">
//               <button className="w-full border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center">
//                 Continue with SSO
//               </button>
//               <button className="w-full border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center">
//                 <Google className="mr-2" /> Continue with Google
//               </button>
//               <button className="w-full border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center">
//                 <Apple className="mr-2" /> Continue with Apple
//               </button>
//             </div>

//             <div className="mt-6 text-center text-sm text-gray-600">
//               No organization account yet?{" "}
//               <a href="#" className="text-blue-600">
//                 Sign up now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right side - Illustration */}
//       <div className="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4">
//             Your one-stop work platform
//           </h2>
//           <p className="text-gray-600">
//             Manage information, workflows, and people, all in one place.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
