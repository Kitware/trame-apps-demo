export default (function (date) {
  return new Date(date).toLocaleDateString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
});