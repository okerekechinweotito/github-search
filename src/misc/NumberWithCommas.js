export default function numberWithCommas(x) {
  let text = String(x);
  return text.length > 3 ? text.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : text;
}
