export interface IGeo {
    lat: string;
    lng: string;
}

export interface ICompany {
    bs: string;
    catchPhrase: string;
    name: string;
}
export interface IAddress {
    city: string;
    geo: IGeo
    street: string;
    suite: string;
    zipcode: string;
}

export interface IUser {
    id: number;
    address: IAddress;
    company: ICompany;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
}