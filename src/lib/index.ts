import type { RequestEvent } from "@sveltejs/kit"

export const authenticateUser = (event: RequestEvent) => {
	const { cookies } = event

	const userToken = cookies.get("auth")
	if (userToken === "regularusertoken") {
		const user = {
			id: 1,
			email: "user@example.com",
			role: "USER",
		}
		return user
	}
	if (userToken === "adminusertoken") {
		const user = {
			id: 2,
			email: "admin@example.com",
			role: "ADMIN",
		}
		return user
	}

	return null
}
