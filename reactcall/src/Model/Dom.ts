export interface CountryData
{
    "name":string;
    "nativeName":string ;
    "capital":string;
    "ohterAcronym":otherAcronyms[];

}

interface otherAcronyms
{
    "name":string;
    "secoundName":string;
    "thirdName":string;
}