import fs from 'fs/promises'
import path from 'path'

import { cache } from 'react'

import { DataSchema, type Project } from './definitions'

const dataDirectory = path.join(process.cwd(), 'src/data')

export const getProjects = cache(async (): Promise<Project[]> => {
	const filePath = path.join(dataDirectory, 'projects.json')

	try {
		const fileContents = await fs.readFile(filePath, 'utf8')
		const rawData = JSON.parse(fileContents)

		const parsedData = DataSchema.safeParse(rawData)

		if (!parsedData.success) {
			console.error('❌ Zod Validation Error:', parsedData.error.flatten())
			return []
		}

		return parsedData.data.projects
	} catch (error) {
		console.error('Failed to read projects data:', error)
		return []
	}
})

export const getProjectBySlug = cache(
	async (slug: string): Promise<Project | undefined> => {
		const projects = await getProjects()
		return projects.find((project) => project.slug === slug)
	},
)
