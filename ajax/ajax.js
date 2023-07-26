function request(url, method, header) {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader(header);
    xhr.send(null);
    xhr.onreadystatechange = function() {
      if (this.readyState!==4) return;
      if (this.status>=200&&this.status<400) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
    xhr.onerror=function() {
      reject(new Error(this.statusText));
    }
  })

  return promise;
}