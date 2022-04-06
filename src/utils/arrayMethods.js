export const seprateByCount = (array, count) => {
  let res = []
  const result = []

  for (let index = 0; index < array.length; index++) {
    res = [...res, array[index]]
    if (res.length === count || index === array.length - 1) {
      result.push(res)
      res = []
    }
  }
  return result
}
