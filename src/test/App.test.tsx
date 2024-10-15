import { InvokeArgs } from '@tauri-apps/api/core'
import { mockIPC } from '@tauri-apps/api/mocks'
import { userEvent } from '@vitest/browser/context'
import { describe, expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../App'
const setup = () => {
  mockIPC(async <T,>(cmd: string, payload?: InvokeArgs): Promise<T> => {
    switch (cmd) {
      case 'greet':
        return `Hello, ${(payload as Record<string, string>)?.name}! You've been greeted from Rust!` as T
      default:
        throw new Error(`Unknown command:${cmd}`)
    }
  })
  const utils = render(<App />)
  const input = utils.getByPlaceholder('Enter name...')
  const button = utils.getByRole('button')
  return {
    input,
    button,
    ...utils,
  }
}

describe('App', () => {
  test('renders name', async () => {
    const { getByText } = setup()
    await expect.element(getByText('Welcome to Tauri!')).toBeInTheDocument()
  })

  test('Calls the greet function with the provided name', async () => {
    const { input, button, getByText } = setup()
    const name = 'Samoy'
    await userEvent.fill(input, name)
    await userEvent.click(button)
    await expect
      .element(getByText(`Hello, ${name}! You've been greeted from Rust!`))
      .toBeInTheDocument()
  })
})
