import { cache } from 'react'

import rawData from '@/data/projects.json'

import { DataSchema, type Project } from './definitions'

export const getProjects = cache(async (): Promise<Project[]> => {
	const parsedData = DataSchema.safeParse(rawData)

	if (!parsedData.success) {
		console.error('❌ Zod Validation Error:', parsedData.error.flatten())
		return []
	}

	return parsedData.data.projects
})
