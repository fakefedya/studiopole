import { z } from 'zod'

export const ImageSchema = z.object({
	src: z.string().min(1),
	alt: z.string(),
	w: z.number().int().positive(),
	h: z.number().int().positive(),
})

export type ProjectImage = z.infer<typeof ImageSchema>

const InfoItemSchema = z.object({
	label: z.string(),
	value: z.string(),
})

const ComparisonSchema = z.object({
	before: ImageSchema,
	after: ImageSchema,
})

export const ProjectSchema = z.object({
	id: z.string(),
	slug: z.string().min(1),
	title: z.string().min(1),
	status: z.enum(['finished', 'in_progress', 'concept']),
	tags: z.array(z.string()),

	description: z.array(z.string()),

	info: z.array(InfoItemSchema),

	cover: ImageSchema,
	gallery: z.array(ImageSchema),

	beforeAfter: ComparisonSchema.optional(),

	updatedAt: z.string().optional(),
})

export type Project = z.infer<typeof ProjectSchema>

export const DataSchema = z.object({
	version: z.number(),
	projects: z.array(ProjectSchema),
})
