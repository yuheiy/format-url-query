import { ParsedUrlQuery } from 'querystring'

export default function formatUrlQuery(
  parsedUrlQuery: ParsedUrlQuery,
  format: {
    [key: string]: string
  },
): {
  [key: string]: string
}

export default function formatUrlQuery(
  parsedUrlQuery: ParsedUrlQuery,
  format: {
    [key: string]: string[]
  },
): {
  [key: string]: string[]
}

export default function formatUrlQuery(
  parsedUrlQuery: ParsedUrlQuery,
  format: {
    [key: string]: string | string[]
  },
): {
  [key: string]: string | string[]
}
