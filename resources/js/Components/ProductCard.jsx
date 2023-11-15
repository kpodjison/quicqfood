import React from "react";

export default function (){
    return(
        <>
                <div className="border shadow-md pb-2 h-[inherit] w-[12rem] rounded hover:scale-110 transition-all cursor-pointer my-2">
                    <img src='anh-nguyen-kcA-c3f_3FE-unsplash.jpg' alt="item image"  width="20" height="20"
                         className="w-auto rounded"/>
                    <div className="productInfoSec p-2 mb-2">
                        <p className="leading-none"> <span className="font-bold">Title:</span> <small>Pizza</small></p>
                        <p className="leading-none"> <span className="font-bold">Price:</span>&nbsp;<small>$14.00 </small></p>
                        <p className="leading-none"> <span className="font-bold">Desc:</span> <small>tuna, olive, </small></p>
                    </div>
                    <button className="rounded-full bg-green-600 px-2 py-1 float-right w-1/2 me-2 text-white">Order Now</button>
                </div>
        </>
    )
}
