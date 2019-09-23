export function goFetch(url, inputOptions) {
  const {headers, ...extraOpts} = inputOptions || {};
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(headers || {})
    },
    ...extraOpts
  };
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        const err = new Error(response.statusText);
        err.res = response;
        throw err;
      } else {
        return response.json();
      }
    })
    .catch(err => {
      alert(err);
    });
}
