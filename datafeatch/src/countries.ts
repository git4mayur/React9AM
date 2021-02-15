export interface country
{
    "name":string;
    "capital":string;
    "region" : string;
    "population" : string;
    "currencie" : Currencies[];
    "flag" : string;
}

interface Currencies{
    "code" :string;
    "name" : string;
    "symbol" : string;
}

