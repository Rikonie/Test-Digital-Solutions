import {Address} from "./address";
import {Company} from "./company";

export class User {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;

    constructor(id: string, name: string, username: string, email: string, address: Address, phone: string,
                website: string, company: Company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company
    }
}