import React, { useEffect, useMemo, useState } from 'react'
import { randomChar, range, shuffleArray } from '../utils'
import {
  UP,
  DOWN,
  LEFT,
  RIGHT,
  LEFT_UP,
  RIGHT_UP,
  LEFT_DOWN,
  RIGHT_DOWN
} from '../types'

function WordSearch ({ debug, arrayTest }) {
  const highlightWords = true;
  const words = ["vida", "saude", "alimentacao", "educacao", "cultura", "esporte", "lazer", "trabalho", "cidadania", "habitacao", "transporte", "liberdade", "dignidade", "respeito", "convivencia"]
  const size = 20;
  const modes = ["horizontal", "vertical"]
  const table = useMemo(() => {
    const points = []

    
    const availableDirections = [
      UP,
      DOWN,
      LEFT,
      LEFT_UP,
      LEFT_DOWN,
      RIGHT,
      RIGHT_UP,
      RIGHT_DOWN
    ].filter(direction => direction.modes.every(mode => modes.includes(mode)))

    const table = range(0, size - 1).map(y => (
      range(0, size - 1).map(x => {
        points.push([ x, y ])

        return {
          char: randomChar(),
          isWord: false
        }
      })
    ))

    shuffleArray(points)

    words.forEach(word => {
      if (/^[A-Za-z]+$/.test(word)) {
        createWord(
          word.toUpperCase(),
          table,
          size,
          shuffleArray(points),
          availableDirections
        )
      }
    })

    return table
  }, [])

  return (
    <div className='word-search'>
      <table>
        <tbody>
          {table.map((row, index) => (
            <tr key={index}>
              {row.map((letter, col) => (
                <td key={col} style={styles.td}>
                  <div
                    style={{
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      color: (letter.isWord && arrayTest.includes(letter.word) && highlightWords) ? 'blue' : 'black',
                      padding: debug ? 15 : 5
                    }}
                  >
                    {letter.char}
                    {debug && (
                      <div style={{ fontSize: 8 }}>
                        {index},{col}
                      </div>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const styles = {
  td: {
    fontSize: 18,
    fontFamily: 'sans-serif'
  }
}

export default WordSearch

const createWord = (word, table, size, points, availableDirections) => {
  for (let pointIndex = 0; pointIndex < points.length; pointIndex += 1) {
    const [ x, y ] = points[pointIndex]

    const directions = shuffleArray(availableDirections.map(d => d.direction))

    for (let directionIndex = 0; directionIndex < directions.length; directionIndex += 1) {
      const [ xd, yd ] = directions[directionIndex]

      const xEnd = x + (word.length - 1) * xd
      const yEnd = y + (word.length - 1) * yd

      if (yEnd > size - 1 || yEnd < 0 || xEnd > size - 1 || xEnd < 0) {
        continue
      }

      let isValid = true
      let positions = []

      for (
        let col = x, row = y, i = 0;
        i < word.length;
        col += xd, row += yd, i += 1
      ) {
        if (table[row][col].isWord && table[row][col].char !== word[i]) {
          isValid = false
          break
        }

        positions.push([ col, row ])
      }

      if (!isValid) {
        continue
      }

      positions.forEach(([ x, y ], index) => {
        table[y][x] = {
          char: word[index],
          isWord: true,
          word: word.toLowerCase()
        }
      })

      return
    }
  }
}