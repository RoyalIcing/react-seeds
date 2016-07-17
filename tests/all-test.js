import expect from 'expect'
import { expectClean } from './clean'

import styler from 'src/all'

describe('All styler', () => {
  it('displays a welcome message', () => {
    expectClean(styler({}).style).toEqual({
			boxSizing: 'border-box'
		})
  })
})
