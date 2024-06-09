"use client";

import { useEffect, useState } from "react";
import CreateForm from "./components/CreateForm";
import { readItem } from "./actions/readAction";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getAllItem = async () => {
      const itemData = await readItem();
      setItems(itemData);
    };

    getAllItem();
  }, []);

  return (
    <div className="max-w-full md:max-w-4xl mx-auto min-h-screen">
      <div className="'w-full flex flex-col gap-4 justify-center items-center min-h-screen px-5">
        <h1 className="text-3xl text-gray-700 font-semibold">
          Inventory System
        </h1>
        <div className="flex flex-col md:flex-row gap-4 md:justify-between w-full ">
          <div className="p-4 w-full bg-gray-200 rounded-md">
            <CreateForm />
          </div>
          <div className="p-4 w-full bg-gray-300 rounded-md">
            Display List
            <div className="grid grid-cols-5 gap-5 p-2 font-bold text-sm md:text-base">
              <div>Item</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total Amount</div>
              <div>Actions</div>
            </div>
            {items &&
              items.map((item, i) => {
                return (
                  <div className="grid grid-cols-5 gap-4 p-2 border border-gray-400 my-5"
                    key={item.id}
                  >
                    <div>{item.itemName}</div>
                    <div>{item.price}</div>
                    <div>{item.quantity}</div>
                    <div>{item.totalAmount}</div>
                    <div className="flex flex-row justify-center items-center gap-3 cursor-pointer">
                      <Link href={`/update/${item.id}`}>
                        <FaRegEdit size={20} />
                      </Link>

                      <Link href={`/remove/${item.id}`}>
                        <AiOutlineDelete size={20} />
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
