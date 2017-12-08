import 'isomorphic-fetch';

const fetchApi = self.fetch.bind(self);

const baseHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

function callFetch(url, options) {
  const finalOptions = Object.assign({credentials: 'include'}, options);
  return fetchApi(url, finalOptions)
    .then(res => res.json())
    .then(json => json)
    .catch(error => {
      throw error
    });
}

export async function fetch(url, options) {
  try {
    return callFetch(url, options);
  } catch (err) {
    throw err;
  }
}

export async function get(url) {
  try {
    return await callFetch(url, {
      method: 'get',
      headers: baseHeaders
    });
  } catch (err) {
    console.error('fetch get error : ', err);
  }
}

export async function post(url, body) {
  try {
    return await callFetch(url, {
      method: 'post',
      headers: baseHeaders,
      body: JSON.stringify(body)
    });
  } catch (err) {
    console.error('fetch post error : ', err);
  }
}

export async function put(url, body) {
  try {
    return await callFetch(url, {
      method: 'put',
      headers: baseHeaders,
      body: JSON.stringify(body)
    });
  } catch (err) {
    console.error('fetch put error : ', err);
  }
}