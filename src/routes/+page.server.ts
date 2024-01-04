import { redirect } from "@sveltejs/kit"
import type { Actions } from "./$types"

//import {newTable} from '$lib/database/turso'
 export async function load({cookies}){

  const hasAuthCookie = cookies.get('auth'); 

     if (hasAuthCookie) {
       throw redirect(302, '/play');
    }
   }



export const actions: Actions = {

	login: async ({ request,cookies }) => {
        
            	const data = await request.formData();
                const email = data.get('email');
                const password = data.get('password');
        if (email && password === '123@4'){

        
		cookies.set("auth", "regularusertoken", {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7, // 1 week
		})
            throw redirect(303,'/play')

        }
                return {failed:true}

	},

}
