import { redirect } from '@sveltejs/kit';
import { newQuery, type User } from "$lib/database/turso";
import uuid4 from "uuid4";
export const actions = {

    register: async ({ request, cookies }) => {
        const data = await request.formData();
        const collections = "slkdsjkdj";
        const query = 'INSERT INTO users (uid, email, password, collections) VALUES (?, ?, ?, ?)';

          const user: User = {
            uid:uuid4(),
            email:data.get('email'),
            password:data.get('password'),
            collections
        };

        const args = [user.uid, user.email, user.password, user.collections];

        if ( user ) {
            await newQuery(query, args);

            cookies.set("auth", "regularusertoken", {
                path: "/",
                httpOnly: true,
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 7, // 1 week
            });
            throw redirect(303, '/play');
        }

        return { failed: true };
    },
};

