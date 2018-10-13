import store from 'store-css'
import FontFaceObserver from 'fontfaceobserver'

store.css(
  'https://fonts.googleapis.com/css?family=Lora:400,400i|Source+Sans+Pro:700',
  { crossOrigin: true }
)

const bodyRegular = new FontFaceObserver('Lora').load(null, 10000)
const bodyItalic = new FontFaceObserver('Lora', { style: 'italic' }).load(null, 10000)
const headingBold = new FontFaceObserver('Source Sans Pro', { weight: 700 }).load(null, 10000)

Promise
  .all([ bodyRegular, bodyItalic ])
  .then(() => document.documentElement.classList.add('lora-ready'))

headingBold
  .then(() => document.documentElement.classList.add('source-sans-ready'))
