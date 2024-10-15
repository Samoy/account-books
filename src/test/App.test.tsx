import { InvokeArgs } from '@tauri-apps/api/core'
import { mockIPC } from '@tauri-apps/api/mocks'
import { userEvent } from '@vitest/browser/context'
import { expect, test } from 'vitest'
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

test('Calls the greet function with the provided name', async () => {
  const { input, button } = setup()
  const name = 'Samoy'
  await userEvent.fill(input, name)
  await userEvent.click(button)
  const p = document.querySelectorAll('p')
  expect(p[1]).toHaveTextContent(`Hello, ${name}! You've been greeted from Rust!`)
})
