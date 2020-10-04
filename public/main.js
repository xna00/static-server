const request = new XMLHttpRequest();

requestCSS.onclick = () => {
  request.open('GET', '1.css');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log('下载完成')
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response)
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
      }
    }
    
  }
  request.send()
}
requestJS.onclick = () => {
  request.open('GET', '2.js');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log('下载完成'); 
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response)
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
      }
    }
  }
  request.send()
}
requestXML.onclick = () => {
  request.open('GET', '3.xml');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log('下载完成')
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML
        const person = dom.getElementsByTagName('person')[0]
        console.log(person)
        console.log('name:', person.getElementsByTagName('name')[0].textContent.trim())
      }
    }
  }
  request.send()
}
requestJSON.onclick = () => {
  request.open('GET', '4.json');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log('下载完成')
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response)
        console.log(JSON.parse(request.response))
      }
    }
  }
  request.send()
}
requestHTML.onclick = () => {
  request.open('GET', '5.html');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log('下载完成')
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response)
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
      }
    }
  }
  request.send()
}