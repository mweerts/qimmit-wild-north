import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const dogs = defineCollection({
	loader: glob({ base: './src/content/dogs', pattern: '**/*.md' }),
	schema: z.object({
		name: z.string(),
		kennel: z.string().optional(),
		pedigreeName: z.string().optional(),
		nameMeaning: z.string().optional(),
		nameLanguage: z.string().optional(),
		order: z.number(),
		profileReady: z.boolean().default(false),
	}),
});

export const collections = { dogs };
