this.onmessage = e => {
  console.log('worker.js: Message received from main script', e.data)
  this.postMessage('Hello main')
}

