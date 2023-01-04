import { TypeDB } from "./db-type";

export class DBData {
    type!: TypeDB;


    constructor() {
        if (new.target === DBData) {
            throw new Error('this is an abstract class');
        }
    }

    public setData= (data:any)=>{};
	

}