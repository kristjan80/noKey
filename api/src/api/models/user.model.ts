import {Request} from 'express';

export interface IUser{
    id:number,
    firstname:string,
    lastname:string,
    email:string,
    password:string,
    createdon:Date
}

export interface IGetUserById extends Request <{id:IUser['id']}> {};
export interface IGetAllUsers extends Request { };
export interface IRemoveUserById extends Request <{id:IUser['id']}> {};