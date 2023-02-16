import { Router } from './router.js'

const menu = document.querySelectorAll('a')
const pages = {
  '/': 'home.html',
  '/exploration': 'exploration.html',
  '/universe': 'universe.html'
}

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/exploration', '/pages/exploration.html')
router.add('/universe', '/pages/universe.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
window.setBackgroundAndMenu = href => {
  href = String(href)

  menu.forEach(item => {
    if (item.pathname === href) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }

    if (href === '/') {
      href = '/home'
    }

    document.querySelector(
      '#app'
    ).style.backgroundImage = `url('./assets${href}.png')`
  })
}
