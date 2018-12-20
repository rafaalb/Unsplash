export default (list) => {
  return list ? list.reduce((acum, current, i) => {
    if (i === list.length - 1) {
    return acum + current + "."  
    }
    return acum + current + ", "
  }, "") : ''
}
