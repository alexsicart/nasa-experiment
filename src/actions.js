import * as Types from './types'

export const addNeos = (neos) => ({
  type: Types.ADD_NEOS,
  neos,
})

export const selectDate = (date) => ({
  type: Types.SELECT_DATE,
  date
})

export const selectObject = (object) => ({
  type: Types.SELECT_OBJECT,
  object
})
