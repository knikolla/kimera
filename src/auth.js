var token = 'TOKEN';

function getRequest(method, url, body) {
    var cors_url = 'https://cors-anywhere.herokuapp.com/' + url;

    var request = new Request(cors_url, {
        method: method,
        mode: 'cors',
        headers: new Headers({
          'x-auth-token': token,
        })
      });

    return request;
}

export default getRequest;