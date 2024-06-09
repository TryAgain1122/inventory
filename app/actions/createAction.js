"use server"

import { PrismaClient } from "@prisma/client";

export const createItem = async (formData) => {
    try {
        const prisma = new PrismaClient()
        console.log("Server Data:", formData)

        const ItemData = {
            itemName: formData.itemName,
            price: Number(formData.price),
            quantity: Number(formData.quantity),
            totalAmount: Number(formData.totalAmount),
        }

        const createdItem = await prisma.item.create({ data: ItemData});
        console.log("created Item:" , createdItem);
    } catch (error) {
        console.log(error)
    }
}