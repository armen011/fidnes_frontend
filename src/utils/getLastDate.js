export const getLatestDate = (array) => {
  let lastDate = array.lengh > 0 ? array[0].updated_at : null
  array.forEach(({ updated_at }) => {
    if (new Date(updated_at) > new Date(lastDate)) {
      lastDate = updated_at
    }
  })
  const date = new Date(lastDate)

  const res = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
  return res
}
