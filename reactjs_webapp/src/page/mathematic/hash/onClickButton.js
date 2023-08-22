export default function onClickButton(e, idElement) {
  e.preventDefault()
  console.log(document.getElementById(idElement))
  document.getElementById(idElement).click()
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}