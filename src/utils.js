// eslint-disable-next-line import/prefer-default-export
export const scrollTo = (el, x, y, smooth) => {
  try {
    el.scrollTo({
      top: y,
      left: x,
      behavior: smooth ? 'smooth' : 'auto',
    });
  } catch (err) {
    el.scrollTo(x, y);
  }
};
