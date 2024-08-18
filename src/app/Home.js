"use client";

import { BsCart4 } from "react-icons/bs";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";


export default function Home({items}) {  
  const router = useRouter();
  //subscribing to the store
  const cartItems = useSelector((store)=>store.cart.items)
  
  //navigating in client component
  function handlerCart(){
    router.push('/cart');
  } 
  return (
    <div>
    <div className="grid grid-cols-2 shadow-lg py-6 ">
    <div className="col-span-1 pl-4 text-start">
      <h1 className="font-semibold text-xl flex items-center "><BsFillLightningChargeFill className="mr-2 text-xl" />Prokart</h1>
    </div>
    <div className="col-span-1 flex justify-center mr-1" onClick={handlerCart}>
      <h1 className=" font-medium text-lg  hover:cursor-pointer flex justify-center items-center"><BsCart4 className="mr-2 text-xl" />Cart-{cartItems.length} items </h1>
    </div>
  </div>  

     

  <div className=" flex flex-wrap mt-8 ml-8 md:ml-24">
            {
                items.length>0 ? items.map((item,index) => <ItemCard key={index} info={item} />)
                :
                (<p>No items</p>)
                
            }
 
        </div> 

     </div>  
  )
} 
