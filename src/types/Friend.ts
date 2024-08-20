import {Address} from "./Address.ts";

export interface Friend {
    id: string;
    name: string;
    email: string;
    phone?: string;
    addresses: Address[];
}