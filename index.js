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

// Format the parsed URL query with default values.
const formatUrlQuery = (parsedUrlQuery, format) => {
  if (!isValidQuery(parsedUrlQuery)) {
    throw new TypeError('parsedUrlQuery is not a valid object.')
  }

  if (!isValidQuery(format)) {
    throw new TypeError('format is not a valid object.')
  }

  return Object.keys(format).reduce((formatted, key) => {
    const defaultValue = format[key].slice()
    const value = (parsedUrlQuery[key] || '').slice()
    const expectedType = Array.isArray(defaultValue) ? 'array' : 'string'
    const actualType = Array.isArray(value) ? 'array' : 'string'

    const assignedValue = (() => {
      if (expectedType === 'string' && actualType === 'string') {
        return value || defaultValue
      }

      if (expectedType === 'string' && actualType === 'array') {
        return value[0] || defaultValue
      }

      if (expectedType === 'array' && actualType === 'string') {
        return value ? [value] : defaultValue
      }

      if (expectedType === 'array' && actualType === 'array') {
        return value.length ? value : defaultValue
      }
    })()

    formatted[key] = assignedValue
    return formatted
  }, {})
}

module.exports = formatUrlQuery
