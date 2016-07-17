import expect from 'expect'
import L from 'lodash/fp'

export const stripUndefined = L.omitBy(L.isUndefined)
export const expectClean = L.pipe(
	stripUndefined,
	expect
)