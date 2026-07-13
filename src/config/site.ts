export const site = {
	name: 'Qimmit Wild North',
	description:
		'Activités touristiques autour des chiens de traîneau — Esquimau canadien (Qimmiq) — près de Kuusamo, en Finlande.',
	lang: 'fr',
	location: 'Tolvantie 48, 43900 Kuusamo, Finlande',
	contact: {
		phone: '0492 71 72 87',
		phoneHref: '+358492717287',
		email: 'info@qimmitwildnorth.com',
		instagram: 'https://www.instagram.com/qimmitwildnorth/',
		facebook: 'https://www.facebook.com/profile.php?id=61591377812424',
	},
	press: [
		{
			title: "Initiative d'un fouronnais, Romain Weerts",
			source: 'Blog de Jean-Louis Xhonneux',
			date: '2026-06-27',
			url: 'http://fourons.blogspirit.com/archive/2026/06/27/initiative-d-un-fouronnais-romain-weerts-3392284.html',
		},
	],
} as const;

export const nav = [
	{ href: '/', label: 'Accueil' },
	{ href: '/projet', label: 'Le projet' },
	{ href: '/chiens', label: 'Les chiens' },
	{ href: '/lieu', label: 'Le lieu' },
	{ href: '/medias', label: 'Médias' },
	{ href: '/contact', label: 'Contact' },
] as const;
