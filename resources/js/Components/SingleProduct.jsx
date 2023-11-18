import React, {useState} from "react";
import {BiDish, BiMinus, BiSolidDish} from "react-icons/bi";
import {BsFire, BsPlus} from "react-icons/bs";
import ProductInfoIcons from "@/Components/ProductInfoIcons.jsx";
import {RiStarHalfSLine} from "react-icons/ri";
import {GiShoppingCart} from "react-icons/gi";

export default  function SingleProduct(){
    const [productCount,setProductCount] = useState(1);
    const increaseProduct = () =>{
        if(productCount > 1){
            setProductCount(productCount - 1)
        }
    }
    const decreaseProduct = () =>{
        setProductCount(productCount + 1)
    }
    const handleSubmit = () =>{
        console.log(productCount)
    }
    return(
        <>
            <div className="my-2 flex flex-row px-2">
                <div className="border shadow-md h-[8rem] w-[12rem] rounded cursor-pointer">
                    <img src='anh-nguyen-kcA-c3f_3FE-unsplash.jpg' alt="item image"  width="20" height="20"
                         className="w-auto rounded"/>
                </div>
                <div className="productInfoSec px-2 mb-2 w-full">
                    <p className="leading-none font-bold">Pizza</p>
                    <div className="flex flex-row  mt-2">

                        <ProductInfoIcons children={ <BiDish className="text-amber-600"/>}
                                          info="345 g"/>
                        <ProductInfoIcons children={ <BsFire  className="text-amber-600" />}
                                          info="345 g"/>
                        <ProductInfoIcons children={ <RiStarHalfSLine className="text-amber-600"  />}
                                          info="3.5"/>
                    </div>
                    <hr className="border-b-2 border-dashed my-1 "/>
                    <p className="leading-none font-bold">Ingredients</p>
                    <small>lolrem ipsum lo lo arem rem ipsum lo lo arem rem ipsum lo lo arem</small>
                    <hr className="border-b-2 border-dashed my-1"/>
                    <div className="bg-orange-500 p-2 rounded-xl w-1/2">
                        <form onSubmit={handleSubmit} >
                            <div className="flex flex-row justify-between">
                                <div>
                                    {/* Todo -- fix float int multiplication (give number of decimal places) */}
                                    <label className="text-white">$ <span>{15 * productCount}</span></label>
                                    <input type="number" value="15"  hidden/>
                                </div>

                                <div className="flex flex-row w-1/2">
                                    <div className="flex border rounded border-white flex-row w-[70px] justify-between align-center text-white">

                                        <BiMinus className="mt-1 cursor-pointer" onClick={increaseProduct}/>
                                        <p>{productCount}</p>
                                        <BsPlus className="mt-1 cursor-pointer" onClick={decreaseProduct}/>
                                    </div>
                                    <button className="bg-white w-7 h-6 rounded ps-1 pt-1 mx-1">
                                        <GiShoppingCart className="text-amber-600"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

