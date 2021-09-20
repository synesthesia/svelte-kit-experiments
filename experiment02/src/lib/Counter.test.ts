import Counter from '$lib/Counter.svelte'
import { render, fireEvent } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText, getByTestId } = render(Counter, {
    value: 10,
  })

  const increment = getByText('increment')
  const decrement = getByText('decrement')
  const counter = getByTestId('counter-value')

  await fireEvent.click(increment)
  await fireEvent.click(increment)
  await fireEvent.click(increment)
  await fireEvent.click(decrement)

  expect(counter.textContent).toBe('12')

  // with jest-dom
  expect(counter).toHaveTextContent('12')
})