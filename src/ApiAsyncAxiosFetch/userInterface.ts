interface Address{
    streets: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company{
    name: string;
    catchPhrase: string;
    bs: string;
}
interface Geo{
    lat: string;
    lng: string;
}

export interface Users{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company
}