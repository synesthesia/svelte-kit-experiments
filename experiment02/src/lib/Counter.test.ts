import Counter from './Counter.svelte'
import { render, fireEvent} from '@testing-library/svelte'

it('it works', async () => {
  const { getByText, getByTestId, getByLabelText } = render(Counter, {
    count: 10,
  })

  const increment = getByLabelText('Increase the counter by one')
  const decrement = getByLabelText('Decrease the counter by one')
  const counter = getByTestId('counter-value')

  await fireEvent.click(increment)
  await fireEvent.click(increment)
  await fireEvent.click(increment)
  await fireEvent.click(decrement)

  expect(counter.textContent).toBe('12')

  // with jest-dom
  expect(counter).toHaveTextContent('12')
})