import { getProjects } from '@/lib/projects'

export default async function Home() {
	const projects = await getProjects()

	return (
		<>
			<h1>Это домашняя страница</h1>
			{projects.map((el) => (
				<span key={el.slug}>{el.title}</span>
			))}
		</>
	)
}
