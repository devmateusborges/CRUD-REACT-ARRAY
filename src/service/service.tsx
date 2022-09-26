import { useEffect } from "react";

//Create UUID
export const Create_UUID = () =>{

    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'

    .replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });

    return uuid;
  }

 export interface Produtos {
    uuid:String;
    nome:String;
    quantidade:String;
    preco:String;
}
interface  Array<Produtos>{}




