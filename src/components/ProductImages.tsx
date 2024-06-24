"use client";

import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/24280095/pexels-photo-24280095/free-photo-of-an-armchair-and-a-basket-of-flowers-standing-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/10863289/pexels-photo-10863289.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/24604600/pexels-photo-24604600/free-photo-of-a-blue-plate-topped-with-waffles-and-ice-cream.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/24807174/pexels-photo-24807174/free-photo-of-a-red-purse-and-roses-sit-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
//   },
// ];

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8 cursor-pointer">
        {items.map((item: any, i: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
