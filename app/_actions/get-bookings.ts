"use server"

// Criar uma interface de Props para descrever o que será extraido do banco de dados

import { endOfDay, startOfDay } from "date-fns"
import { db } from "../_lib/prisma"

interface GetBookingsProps {
    serviceId: string,
    date: Date
}

export const getBookings = ({ date }: GetBookingsProps) => {
    return db.booking.findMany({
        where: {
            date: {
                lte: endOfDay(date),
                gte: startOfDay(date),
            }
        }
    })
}