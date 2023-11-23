const route = {
  "/home": "/pages/home.html",
  "/exploracao": "/pages/exploracao.html",
  "/universe": "/pages/universe.html",
  404: "/pages/404.html",
}

function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
}

function handle() {
  const pathname = window.location.pathname

  console.log(pathname)
}
