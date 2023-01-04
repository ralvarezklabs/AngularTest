import { DBClient } from "./db-client";
import { DBData } from "./db-data";
import { DBOportunity } from "./db-probability";

export class DBType {
    CLIENT: any = ()=>{return new DBClient};
    Oportunity: any = ()=>{new DBOportunity};

    private dbCreator:DBData|null = null;

    DBType(data:DBData){
        this.dbCreator = data;
    }

    createDB():DBData {
       
        if (this.dbCreator?.type instanceof DBClient) {
            return this.CLIENT;
        } else {
            return this.Oportunity;
        }

    }
}

export type TypeDB = DBClient

 