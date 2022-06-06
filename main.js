const worker = new Worker('worker.js')

worker.postMessage('Hello Worker')
worker.onmessage = e => {
  console.log('main.js: Message received from worker:', e.data)
}
