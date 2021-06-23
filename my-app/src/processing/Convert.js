import ReactHtmlParser from 'react-html-parser'
import * as Solve from '../processing/Solve'

// Function to show steps of chinese remainder problem
export function chineseStep (listOfnr) {
  if (Solve.chineseSolution(listOfnr) === 'No solution') {
    const steps = '<br><h3 style="text-align: center;">Sorry, Chinese Remainder Theorem Cannot Solve This</h3></br>'
    return <div>{ReactHtmlParser(steps)}</div>
  } else {
    const m = Solve.multipleAll(listOfnr)
    const arrayY = Solve.chineseLists(listOfnr).arrY
    const arrayM = Solve.chineseLists(listOfnr).arrM

    let steps = '<br><h1>Problem Solution</h1><h3>Linear Congruence System</h3>'

    let count = 1
    for (const nr of listOfnr) {
      steps += ('<p>x ≡ ' + nr[1] + ' (mod ' + nr[0] + '); a<sub>' + count + '</sub> = ' + nr[1] + '; m<sub>' + count + '</sub> = ' + nr[0] + '</p>')
      count++
    }

    steps += '<br><h3>Calculate m</h3>'
    steps += ('<p>m = ' + howCalculated(listOfnr, 'M', count - 1) + ' = ' + m + '</p>')

    steps += '<br><h3>Calculate M</h3>'
    count = 1
    for (const M of arrayM) {
      steps += ('<p>M<sub>' + count + '</sub> = ' + howCalculated(listOfnr, 'M', count - 1) + ' = ' + M + '</p>')
      count++
    }

    count = 1
    steps += '<br><h3>Calculate y</h3>'
    for (const y of arrayY) {
      steps += ('<p>y<sub>' + count + '</sub> = ' + y + ' because ' + arrayM[count - 1] + ' · ' + y + ' ≡ 1 (mod ' + listOfnr[count - 1][0] + ')</p>')
      count++
    }

    steps += '<br><h3>Result</h3><p>x = '
    for (let i = 0; i < listOfnr.length; i++) {
      steps += listOfnr[i][1] + ' · ' + arrayM[i] + ' · ' + arrayY[i]

      if (i < listOfnr.length - 1) {
        steps += ' + '
      } else {
        steps += (' (mod ' + m + ')</p>')
      }
    }

    steps += ('<p><b>x = ' + Solve.chineseSolution(listOfnr) + '</b></p>')

    steps += '</div>'

    return <div>{ReactHtmlParser(steps)}</div>
  }
}

// Function to show how m and M is calculated
function howCalculated (listOfnr, morM, idx) {
  let result = ''

  for (let i = 0; i < listOfnr.length; i++) {
    if (morM === 'm') {
      result += (listOfnr[i][0] + ' · ')
    } else if (morM === 'M') {
      if (i !== idx) {
        result += (listOfnr[i][0] + ' · ')
      }
    }
  }

  return result.substring(0, result.length - 2)
}
