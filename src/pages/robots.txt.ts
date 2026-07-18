import type { APIRoute } from 'astro';
import { site } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
	const body = site.allowIndexing
		? ['# Public indexing enabled.', 'User-agent: *', 'Allow: /', ''].join('\n')
		: [
				'# Preprod / pre-launch: do not index.',
				'# Set site.allowIndexing = true in src/config/site.ts at public launch.',
				'User-agent: *',
				'Disallow: /',
				'',
			].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
