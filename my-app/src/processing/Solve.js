// Function to get all y's and M's
export function chineseLists (list_of_n_r) {
  const array_y = []
  const array_M = []

  for (const n_r of list_of_n_r) {
    const M = multipleAll(list_of_n_r) / n_r[0]
    array_M.push(M)

    let j = 1
    while ((M * j) % n_r[0] !== 1) {
      j++
    }

    const y = j
    array_y.push(y)
  }

  return { arr_y: array_y, arr_M: array_M }
}

// Function to multiple all dividers
export function multipleAll (list_of_n_r) {
  let result = 1

  for (const n_r of list_of_n_r) {
    result *= n_r[0]
  }

  return result
}

// Function to get solution from known all y's and M's
export function chineseSolution (list_of_n_r) {
  const array_y = chineseLists(list_of_n_r).arr_y
  const array_M = chineseLists(list_of_n_r).arr_M

  let result = 0
  for (let i = 0; i < list_of_n_r.length; i++) {
    result += list_of_n_r[i][1] * array_M[i] * array_y[i]
  }

  return result % multipleAll(list_of_n_r)
}
