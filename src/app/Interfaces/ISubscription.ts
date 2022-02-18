import { IProfile } from "./IProfile";

export interface ISubscription extends IProfile{
    subscriptionId?:number,
    profileId?: number,
    name?: string,
    Activated?: Date,
    expDate?: Date,
    isActive?: boolean,

}