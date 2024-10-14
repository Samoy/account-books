// src/__tests__/App.test.tsx

import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../App'

test('renders name', async () => {
  const { getByText, getByRole } = render(<App name="Vitest" />)

  await expect.element(getByText('Hello Vitest x1!')).toBeInTheDocument()
  await getByRole('button', { name: 'Increment ' }).click()

  await expect.element(getByText('Hello Vitest x2!')).toBeInTheDocument()
})
