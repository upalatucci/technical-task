export const scrollTo = (el, x, y, smooth) => {
  try {
    el.scrollTo({
      top: y,
      left: x,
      behavior: smooth ? 'smooth' : 'auto'
    })
  } catch(err) {
    el.scrollTo(x, y)
  }
}