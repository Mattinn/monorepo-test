import * as api from '$lib/api.js';

export async function GET({ params, locals }) {
	const { profile } = await api.GET(`profiles/${params.user}`, locals.user && locals.user.token);

	return {
		body: profile
	};
}
