function request(url) {
  function request_promise() {
    return new Promise(function(resolve, reject) {
      console.log(`url = ${url}`);
      var xhl = new XMLHttpRequest();
      xhl.open("GET", url);
      xhl.send(null);
      xhl.onreadystatechange = function() {
        if (xhl.readyState === 4) {
          if (xhl.status === 200) {
            resolve(xhl.responseText);
          } else {
            reject("Falha na requisição");
          }
        }
      };
    });
  }
  request_promise()
    .catch(function(error) {
      console.warn(error);
    })
    .then(function(resolve) {
      return resolve;
    });
}

console.log(request("https://api.github.com/users/diego3g"));
