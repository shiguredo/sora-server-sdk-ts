import { expect, test } from 'vitest'
import Api from '../src/api'

test('new Api', () => {
  const api = new Api('https://sora.example.com/api')
  expect(api).toBeInstanceOf(Api)
})
