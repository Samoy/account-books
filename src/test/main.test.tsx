import { describe, expect, it } from 'vitest'

describe('main', () => {
  it('should renders correctly', async () => {
    const container = document.createElement('div')
    container.id = 'root'
    document.body.appendChild(container)
    await import('../main.tsx')
    expect(container.innerHTML).toMatchSnapshot()
  })
})
