let cacheData = 'appV1';

this.addEventListener('install', (event)=>{
  event.waitUntil(
    caches.open(cacheData).then(cache=>{
      cache.addAll([
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/bundle.js',
        '/static/js/vendors~main.chunk.js',
        '/index.html',
        '/'
      ])
    })
  )
})

this.addEventListener('fetch', (event)=>{


  if(!navigator.onLine)
    if(event.request.url === 'http://localhost:3000/static/js/main.chunk.js'){
      event.waitUntil(
        this.registration.showNotification('Internet',{
          body:'No tienes acceso a internet'
        })
      )
    }

  {
    event.respondWith(
      caches.match(event.request).then((resp)=>{
        if(resp){
          return resp
        }
      })
    )
  }

})