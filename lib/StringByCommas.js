export default (list) => {
  return list ? list.reduce((acum, current) => {
    return acum + current + " "
  }, "").slice(0, -2).concat(".") : ''
}
