import { IProfile } from "./IProfile";

export interface IOrder extends IProfile{
    orderId?:number,
    profileId?: number,
    paymentId?: number,
    movieId?: number,
    firstName?: string,
    lastName?: string,
    address?: string,
    orderDate?: Date,
    isPaid?: boolean

}