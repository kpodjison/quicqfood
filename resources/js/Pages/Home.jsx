import React from 'react'
import GuestWrapper from "@/Components/GuestWrapper.jsx";
import ProductCard from "@/Components/ProductCard.jsx";

export default function Home() {
  return (
    <>
    <GuestWrapper>
        <div className="sm:w-full mt-[170px] mx-auto p-6 lg:p-8 bg-[#0009] md:w-1/2 flex flex-col content-center">
            <h2 class="text-center font-bold text-white">
                QuicQFood
            </h2>
            <h4 class="text-center text-white">
                Welcome to the land where food chases away hunger!!
            </h4>
            <p className="text-center mb-3 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Exercitationem error ea necessitatibus nam atque
                dolore adipisci oluptates consectetur reprehenderit
                odit iste deserunt sunt rem ut, perferendis cum rerum
                voluptatum unde.
            </p>

            <a
                href="#eatSomething"
                className="bg-green-600 text-white p-3 rounded my-2 w-1/2 text-center mx-auto"
            >
                Eat Something
            </a>
        </div>
        <div className="p-6 lg:p-8 mt-[120px] bg-white flex flex-row gap-3 flex-wrap justify-center" id="eatSomething">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>

    </GuestWrapper>
    </>
  );
}
