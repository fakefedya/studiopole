import { Hero } from '@/components/sections/home/Hero/Hero'
import { Intro } from '@/components/sections/home/Intro/Intro'
import { Process } from '@/components/sections/home/Process/Process'
import { Transformation } from '@/components/sections/home/Transformation/Transformation'

export default function Home() {
	return (
		<>
			<Hero />
			<Intro />
			<Transformation />
			<Process />
		</>
	)
}
