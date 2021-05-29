
import './styles.css'
import catchLink from './Utils/catchLink'
import router from './Router/index';

(async() => {
  const container = document.querySelector('#container')
  catchLink(container, router)
  await router(container)
})()