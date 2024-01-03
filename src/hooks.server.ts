import {redirect, type Handle} from '@sveltejs/kit'
import { authenticateUser } from '$lib'

export const handle: Handle = async ({ event, resolve }) => {
	// Stage 1
	event.locals.user = authenticateUser(event)

	if (event.url.pathname.startsWith("/play")) {
		if (!event.locals.user) {
			throw redirect(303, "/")
		}
	}

	const response = await resolve(event) 


	return response
}
