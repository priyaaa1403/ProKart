"use client";

import Image from "next/image";
import image from "../../public/alien.jpg";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux"
import ItemCard from "./ItemCard";
import { clearCart } from "../store/cartSlice";
import { useRouter } from "next/navigation";

export default function Cart(){ 
    const router= useRouter();
    const dispatch = useDispatch();
    //handling clear cart 
    function handleClearCart(){
        dispatch(clearCart());

    }
    //navigating back to home
    function handleHome(){
        router.push("/")

    }

    //subscribing to the cart store
    const items = useSelector((store) => store.cart.items) 
    return(
        <div>
          
        
        <div className="mt-5 mx-auto w-11/12">
        
        <div className="grid grid-cols-2 shadow-lg py-6 rounded-md ">
    <div className="col-span-1 pl-4 text-start">
      <h1 className="font-semibold text-xl flex items-center "><BsFillLightningChargeFill className="mr-2 text-xl" />Prokart</h1>
    </div>
    <div className="flex text-center font-bold text-xl hover:cursor-pointer mx-20 md:ml-72"
            
              onClick={handleHome}>
              Home
         
        </div>
  </div> 



           <div className="flex flex-wrap mt-8 ml-2 md:ml-8"> 
           {
           items.length > 0 
           ? items.map((item,index)=><ItemCard key={index} info={item} isInCart = {true} />) 
             : <div className="m-auto shadow-xl text-center">
            <h1>No items added!</h1> 
            <Image
                className="object-cover"
                src={image}
                alt="empty"
                height={255}
                width={255}
              />     
           

        </div> }
            </div>
        </div>
        {items.length > 0  && <button className=" w-24 h-8 bg-black text-white font-semibold rounded-md shadow-lg mt-4 ml-28 mb-4"
        onClick={handleClearCart}
        >Clear cart</button>} 
        </div>
    )  
}  
  