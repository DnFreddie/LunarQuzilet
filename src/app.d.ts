// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
type User = {
	id: number
	email: string
	role: string
}



declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
