'use strict'

// Create an array of `object`'s own property values.
const values = (object) => {
  return Object.keys(object).map((key) => {
    return object[key]
  })
}

// Check if the type of `value` is `string | string[]`.
const isValidValueOfQuery = (value) => {
  return (
    typeof value === 'string' ||
    (Array.isArray(value) &&
      value.every((element) => typeof element === 'string'))
  )
}

// Check if the type of `query` is `{ [key: any]: string | string[] }`.
const isValidQuery = (query) => {
  return typeof query === 'object' && values(query).every(isValidValueOfQuery)
}

// Shallow copy if type of `value` is array.
const cloneIfArray = (value) => {
  return Array.isArray(value) ? [...value] : value
}

// Format the parsed URL query with default values.
const formatUrlQuery = (parsedUrlQuery, format) => {
  if (!isValidQuery(parsedUrlQuery)) {
    throw new TypeError('parsedUrlQuery is not a valid object.')
  }

  if (!isValidQuery(format)) {
    throw new TypeError('format is not a valid object.')
  }

  return Object.keys(format).reduce((formatted, key) => {
    const defaultValue = cloneIfArray(format[key])
    const actualValue = cloneIfArray(parsedUrlQuery[key] || '')
    const isExpectedTypeArray = Array.isArray(defaultValue)
    const isExpectedTypeString = !isExpectedTypeArray
    const isActualTypeArray = Array.isArray(actualValue)
    const isActualTypeString = !isActualTypeArray

    const assignedValue = (() => {
      if (isExpectedTypeString && isActualTypeString) {
        return actualValue || defaultValue
      }

      if (isExpectedTypeString && isActualTypeArray) {
        return actualValue[0] || defaultValue
      }

      if (isExpectedTypeArray && isActualTypeString) {
        return actualValue ? [actualValue] : defaultValue
      }

      if (isExpectedTypeArray && isActualTypeArray) {
        return actualValue.length ? actualValue : defaultValue
      }
    })()

    formatted[key] = assignedValue
    return formatted
  }, {})
}

module.exports = formatUrlQuery
