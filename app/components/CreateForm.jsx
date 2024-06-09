'use client'

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createItem } from "../actions/createAction";

const CreateForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();

    const priceRegister = register("price");
    const quantityRegister = register("quantity");
    const [totalAmount, setTotalAmount] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0)
    

    const handlePrice = (e) => {
        const itemPrice = e.target.value;
        setPrice(e.target.value);
        console.log(itemPrice)
    }
    
    const handleQuantity = (e) => {
        const qty = e.target.value;
        setQuantity(qty)
        console.log(qty)
    }

    useEffect(() => {
        if (price != 0 && quantity != 0) {
            setTotalAmount(price * quantity)
        } 
        else {
            setTotalAmount(0)
        }
    }, [quantity, price])

    const onSubmit = async (formData) => {
        const newFormData = {...formData, totalAmount}
        await createItem(newFormData)
        reset()
        // console.log(newFormData)
    }
  return (
    <div className="w-full h-full">
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-col my-3">
                <label>Item Name</label>
                <input 
                    type="text"
                    {...register("itemName")}
                    className="outline-none border border-gray-400 px-2 py-1 rounded-md"
                />
                <label>Price</label>
                <input 
                    type="number"
                    {...priceRegister}
                    onChange={e => {
                        priceRegister.onChange(e);
                        handlePrice(e)
                    }}
                    className="outline-none border border-gray-400 px-2 py-1 rounded-md"
                />
                <label>Quantity</label>
                <input 
                    type="number"
                    {...quantityRegister}
                    onChange={e => {
                        quantityRegister.onChange(e);
                        handleQuantity(e)
                    }}
                    className="outline-none border border-gray-400 px-2 py-1 rounded-md"
                />
                <fieldset className="flex flex-col my-3">
                    <label>Total Amount: {totalAmount}</label>
                </fieldset>
                <fieldset className="flex flex-col my-3">
                    <button type="submit" className="px-10 py-1 border border-blue-600 rounded-md">Save</button>
                </fieldset>
            </fieldset>
        </form>
    </div>
  )
}

export default CreateForm