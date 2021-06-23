// Function to get all y's and M's
export function chineseLists (listOfnr) {
  const arrayY = []
  const arrayM = []

  for (const nr of listOfnr) {
    const M = multipleAll(listOfnr) / nr[0]
    arrayM.push(M)

    let j = 1
    while ((M * j) % nr[0] !== 1) {
      j++

      if (j > nr[0]) {
        return 'No solution'
      }
    }

    const y = j
    arrayY.push(y)
  }

  return { arrY: arrayY, arrM: arrayM }
}

// Function to multiple all dividers
export function multipleAll (listOfnr) {
  let result = 1

  for (const nr of listOfnr) {
    result *= nr[0]
  }

  return result
}

// Function to get solution from known all y's and M's
export function chineseSolution (listOfnr) {
  if (chineseLists(listOfnr) === 'No solution') {
    return 'No solution'
  } else {
    const arrayY = chineseLists(listOfnr).arrY
    const arrayM = chineseLists(listOfnr).arrM

    let result = 0
    for (let i = 0; i < listOfnr.length; i++) {
      result += listOfnr[i][1] * arrayM[i] * arrayY[i]
    }

    return result % multipleAll(listOfnr)
  }
}
