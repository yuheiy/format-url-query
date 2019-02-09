import { ParsedUrlQuery } from 'querystring'

export default function formatUrlQuery<T extends ParsedUrlQuery>(
  parsedUrlQuery: ParsedUrlQuery,
  format: T,
): T
