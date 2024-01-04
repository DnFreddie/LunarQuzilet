import {DB_AUTH_TOKEN,DB_URL} from  '$env/static/private';
import { createClient } from "@libsql/client";



export interface User{
    uid:string,
    email:string,
    password:string,
    collections:string,
}

export async function newQuery(query:string,args){

const client = createClient({
    url:DB_URL,
    authToken:DB_AUTH_TOKEN,
    
})
 try {
        await client.execute({
            sql:  query  ,
            args: args,
        });

        console.log('Users table created successfully');
    } catch (e) {
        console.error(e);
    }



}
