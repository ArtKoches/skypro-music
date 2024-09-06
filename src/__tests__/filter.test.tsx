import Filter from '@/components/Filter/FilterMain/Filter'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import FilterButton from '@/components/Filter/FilterButton/FilterButton'
import { FilterType } from '@/lib/types'

describe('Фильтр', () => {
	it('рендер заголовка', () => {
		render(<Filter playlist={[]} />)

		const filterTitle = screen.getAllByText('Искать по:')
		expect(filterTitle.length).toBeGreaterThan(0)
	})
	it('рендер всплывающего списка категории', () => {
		render(<Filter playlist={[]} />)

		const filterList = screen.getAllByText('исполнителю')
		expect(filterList.length).toBeGreaterThan(0)
	})

	const filterListTests: string[] = [
		FilterType.author,
		FilterType.year,
		FilterType.genre,
	]
	filterListTests.forEach(btnTitle => {
		it('рендер кнопок категории фильтров', () => {
			const filter = renderer
				.create(<FilterButton title={btnTitle} getFilterLists={[]} />)
				.toJSON()
			expect(filter).toMatchSnapshot()
		})
	})
})
