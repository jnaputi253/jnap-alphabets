const algorithm = require('./algorithm')

describe('Alphabet order', () => {

  const strictEquals = (expected, actual) => {
    expect(expected).toStrictEqual(actual)
  }

  it('returns an empty list when no input is provided', () => {
    const order = algorithm([])

    expect(order.length).toBe(0)
  })

  it('returns "b"', () => {
    const order = algorithm(['b'])

    expect(order).toStrictEqual(['b'])
  })

  it('returns "b" when one word contains it multiple times', () => {
    const order = algorithm(['bbbbb'])

    strictEquals(['b'], order)
  })

  it('returns the first letters of words that have one character', () => {
    const order = algorithm(['b', 'a'])

    strictEquals(['b', 'a'], order)
  })

  it('returns the first letters of words that have multiple characters', () => {
    const order = algorithm(['brick', 'atlas'])

    strictEquals(['b', 'a'], order)
  })

  it('returns the correct order when multiple words share the same starting letter', () => {
    const order = algorithm(['back', 'bend'])

    strictEquals(['b', 'a', 'e'], order)
  })

  it('returns the correct order when there are words with different starting letters #1', () => {
    const order = algorithm(['bca', 'aaa', 'acb'])

    strictEquals(['b', 'a', 'c'], order)
  })

  it('returns the correct order when there are words with different starting letters and lengths', () => {
    const order = algorithm(['fdan', 'fgnn', 'at', 'ant', 'ano'])

    strictEquals(['f', 'a', 'd', 'g', 't', 'n'], order)
  })

  it('returns the correct order when there are multiple words #3', () => {
    const order = algorithm([
      'fdan',
      'fgnn',
      'ancde',
      'ancle'
    ])

    strictEquals(['f', 'a', 'd', 'g', 'n', 'c', 'l'], order)
  })

  it('returns the correct order when the alphabet is reversed', () => {
    const order = algorithm([
      'zare',
      'yale',
      'yore'
    ])

    strictEquals(['z', 'y', 'a', 'o'], order)
  })
})
