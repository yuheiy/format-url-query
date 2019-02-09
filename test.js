import test from 'ava'
import formatUrlQuery from '.'

test('main', (t) => {
  t.deepEqual(
    formatUrlQuery(
      {
        x: 'value',
      },
      {},
    ),
    {},
  )

  t.deepEqual(
    formatUrlQuery(
      {},
      {
        x: 'default',
      },
    ),
    {
      x: 'default',
    },
  )

  t.deepEqual(
    formatUrlQuery(
      {},
      {
        x: '',
      },
    ),
    {
      x: '',
    },
  )

  t.deepEqual(
    formatUrlQuery(
      {
        x: '',
      },
      {
        x: 'default',
      },
    ),
    {
      x: 'default',
    },
  )

  t.deepEqual(
    formatUrlQuery(
      {
        x: 'value',
      },
      {
        x: 'default',
      },
    ),
    {
      x: 'value',
    },
  )

  t.deepEqual(
    formatUrlQuery(
      {},
      {
        x: [],
      },
    ),
    {
      x: [],
    },
  )

  t.deepEqual(
    formatUrlQuery(
      {},
      {
        x: ['default'],
      },
    ),
    {
      x: ['default'],
    },
  )

  t.deepEqual(
    formatUrlQuery(
      {
        x: 'value',
      },
      {
        x: [],
      },
    ),
    {
      x: ['value'],
    },
  )

  t.deepEqual(
    formatUrlQuery(
      {
        x: ['value'],
      },
      {
        x: [],
      },
    ),
    {
      x: ['value'],
    },
  )

  t.deepEqual(
    formatUrlQuery(
      {
        x: [],
      },
      {
        x: ['default'],
      },
    ),
    {
      x: ['default'],
    },
  )

  t.deepEqual(
    formatUrlQuery(
      {
        x: [],
      },
      {
        x: 'default',
      },
    ),
    {
      x: 'default',
    },
  )

  t.deepEqual(
    formatUrlQuery(
      {
        x: ['value1', 'value2'],
      },
      {
        x: 'default',
      },
    ),
    {
      x: 'value1',
    },
  )
})
