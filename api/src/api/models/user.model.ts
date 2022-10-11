
export interface IUser{
    id:number,
    firstname:string,
    lastname:string,
    email:string,
    phash:string,
    salt:string,
    createdon:Date,
    group:number
}