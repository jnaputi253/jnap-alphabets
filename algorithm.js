/**
 * Identifies the alphabet ordering based on the sorted words passed in.
 * @param {string[]} sortedWords The sorted list of words that will be used to identify the alphabet ordering
 * @returns {string[]} The alphabet order based on the input
 */
function findAlphabetOrder(sortedWords) {
  if (sortedWords.length === 0) {
    return []
  }

  const alphabetOrder = []
  const wordDictionary = {}

  sortedWords.forEach(word => {
    if (!isLetterInDictionary(wordDictionary, word[0])) {
      const wordsForLetter = [word.substring(1)]
      wordDictionary[word[0]] = wordsForLetter
      return
    }

    wordDictionary[word[0]].push(word.substring(1))
  })

  for (const letter in wordDictionary) {
    if (alphabetOrder.indexOf(letter) === -1) {
      alphabetOrder.push(letter)
    }
  }

  for (const letter in wordDictionary) {
    if (alphabetOrder.indexOf(letter) === -1) {
      alphabetOrder.push(letter)
    }

    const words = wordDictionary[letter]

    if (containsNoneOrOne(words)) {
      continue
    }

    getAlphabetOrderForWords(alphabetOrder, wordDictionary[letter])
  }

  return alphabetOrder
}

function getAlphabetOrderForWords(alphabetOrder, words) {
  const longestLength = getLongestWordLength(words)
  let differenceFound = false
  let wordIndex = 0
  let letterIndex = 0

  while (letterIndex !== longestLength) {
    if (letterIndex > words[wordIndex].length) {
      wordIndex++
      continue
    }

    const letter = words[wordIndex][letterIndex]
    if (alphabetOrder.indexOf(letter) === -1) {
      alphabetOrder.push(letter)
    }

    for (let currentWordIndex = wordIndex; currentWordIndex < words.length; currentWordIndex++) {
      const currentLetter = words[currentWordIndex][letterIndex]
      if (currentLetter !== letter && alphabetOrder.indexOf(currentLetter) === -1) {
        alphabetOrder.push(currentLetter)
        differenceFound = true
        break
      }
    }

    if (differenceFound) {
      break
    }

    letterIndex++
  }
}

function getLongestWordLength(words) {
  const copy = [...words]
  return copy.sort((first, second) => second.length - first.length)[0].length
}

function isLetterInDictionary(dictionary, letter) {
  return dictionary[letter]
}

function containsNoneOrOne(words) {
  return words.length === 0 || words.length === 1
}

module.exports = findAlphabetOrder
