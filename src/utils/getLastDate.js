export const getLatestDate = (array) => {
  let lastDate = array.lengh > 0 ? array[0].updated_at : null
  array.forEach(({ updated_at }) => {
    if (new Date(updated_at) > new Date(lastDate)) {
      lastDate = updated_at
    }
  })
  const date = new Date(lastDate);
  const month = date.getMonth() + 1;
  
  const res = `${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}.${month < 10 ? '0'+month : month }.${date.getFullYear()}  ${date.getHours() < 10 ? '0'+date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}`
  return res
}
