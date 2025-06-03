import { fakerEN } from "@faker-js/faker";

// export function MakeArrayForSeed(FakerData:()=>string|number,numOfLength:number){
export function MakeArrayForSeed(
    FakerData: () => string | number,
    numOfLength: number
): (string | number)[]{
    // console.log(FakerData)
    // console.log(numOfLength)
    fakerEN.seed(numOfLength)
    return Array.from({ length: numOfLength }, () =>FakerData() ); 
}