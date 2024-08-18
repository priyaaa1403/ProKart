"use client";

import { LuIndianRupee } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addItem ,removeItem} from "../store/cartSlice";

export default function ItemCard({info, isInCart = false }) {
    const dispatch = useDispatch();
    const {title,price,image,rating} = info;
    const newprice = Math.floor(price*100);
    //handling user interaction and dispatching actions
    function handleClick(info){
        if (isInCart) {
            dispatch(removeItem(info));  // Dispatch remove action
          } else {
            dispatch(addItem(info));  // Dispatch add action
          }
    }
    return(
        <div className="w-44 md:w-64 relative mr-7 md:mr-0 h-80 hover:bg-gray-400 hover:cursor-pointer group shadow-lg rounded-xl bg-gradient-to-b from-gray-100 mb-10 mx-1 md:mx-4 text-sm px-4">
        <div className="w-36 md:w-48 mb-2   mx:ml-2 h-3/5 pt-2 group-hover:scale-110 transition-transform">
            <img 
            className="w-full rounded-md h-full object-cover" 
            src={image}/>
        </div>
        <button
         className="absolute top-0 right-0 w-20 h-7 bg-black text-white font-semibold rounded-md"
         onClick={() => handleClick(info)}
         >
              {isInCart ? "Remove-" : "Add+"}
         </button> 
        <h1 className="font-bold text-sm mt-2" >{title}</h1>    
        <div className=" flex justify-between mt-3">
        <h1 className="font-semibold text-sm flex items-center "><LuIndianRupee /> {newprice}</h1>    
        <h1 className="flex font-semibold items-center">{rating.rate}<GoStarFill className="mr-1 text-yellow-400 text-lg" /></h1>
        </div>  
        </div>         
    )  
} 