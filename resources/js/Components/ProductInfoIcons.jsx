import {BiDish} from "react-icons/bi";
import React from "react";

export default function ProductInfoIcons({children,info}){
    return(
        <>
            <div className="w-[50px]">
                <div className="bg-gray-300 rounded-full w-7 h-7 ps-1.5 pt-1">
                    {children}
                </div>
               <small> <span className="text-center w-full">{info}</span> </small>
        </div>
        </>
    )
}
