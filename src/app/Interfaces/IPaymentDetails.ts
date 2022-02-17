import { IProfile } from "./IProfile";

export interface IPaymentDetails extends IProfile{
    paymentDetailsId?: number,
    orederId?: number,
    transactionId?: number,
    paymentType?: string,
    cardType?: string,
    cardholderName?: string,
    expMonth?:string,
    securityCode?:number

}
