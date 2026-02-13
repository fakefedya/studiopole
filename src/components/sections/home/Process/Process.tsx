'use client'

import { useState } from 'react'

import { Section } from '@/components/layout/Section/Section'
import { AccordionItem } from '@/components/ui/AccordionItem/AccordionItem'
import { Text } from '@/components/ui/Text/Text'

import styles from './Process.module.css'

const STAGES = [
	{
		id: '01',
		title: 'Встреча и бриф',
		text: 'Знакомимся на объекте или в офисе. Обсуждаем ваши пожелания, стиль жизни, состав семьи и бюджет. Составляем подробное техническое задание, которое станет фундаментом проекта.',
	},
	{
		id: '02',
		title: 'Планировочное решение',
		text: 'Разрабатываем 2-3 варианта функциональной планировки. Расставляем мебель с учетом эргономики, освещения и инженерных коммуникаций. Утверждаем финальный вариант.',
	},
	{
		id: '03',
		title: '3D Визуализация',
		text: 'Создаем фотореалистичные изображения будущего интерьера. Вы увидите реальные материалы, цвета и мебель еще до начала ремонта.',
	},
	{
		id: '04',
		title: 'Рабочая документация',
		text: 'Готовим подробные чертежи для строителей: планы демонтажа/монтажа, электрики, сантехники, развертки стен и спецификации материалов.',
	},
	{
		id: '05',
		title: 'Авторский надзор',
		text: 'Контролируем стройку на всех этапах. Решаем вопросы с подрядчиками, следим за соответствием реализации проекту и помогаем с закупками.',
	},
]

export const Process = () => {
	const [activeId, setActiveId] = useState<string>(STAGES[0].id)
	const toggleAccordion = (id: string) => {
		setActiveId((prevId) => (prevId === id ? '' : id))
	}
	return (
		<Section>
			<div className={styles.root}>
				<div className={styles.heading}>
					<Text as={'h2'} size={'4xl'} weight={'medium'}>
						Этапы работы
					</Text>
				</div>
				<div className={styles.list}>
					{STAGES.map((stage) => (
						<AccordionItem
							key={stage.id}
							num={stage.id}
							title={stage.title}
							isOpen={activeId === stage.id}
							onClick={() => toggleAccordion(stage.id)}
						>
							{stage.text}
						</AccordionItem>
					))}
				</div>
			</div>
		</Section>
	)
}
