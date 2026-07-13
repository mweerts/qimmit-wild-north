export const site = {
	name: 'Qimmit Wild North',
	description:
		'Activités touristiques autour des chiens de traîneau — Esquimau canadien (Qimmiq) — près de Kuusamo, en Finlande.',
	lang: 'fr',
	location: 'Tolvantie 48, 43900 Kuusamo, Finlande',
} as const;

export const nav = [
	{ href: '/', label: 'Accueil' },
	{ href: '/projet', label: 'Le projet' },
	{ href: '/chiens', label: 'Les chiens' },
	{ href: '/lieu', label: 'Le lieu' },
	{ href: '/medias', label: 'Médias' },
	{ href: '/contact', label: 'Contact' },
] as const;
