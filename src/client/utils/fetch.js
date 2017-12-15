import 'isomorphic-fetch';

const fetchApi = self.fetch.bind(self);

const baseHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

class Fetch {
  constructor(api) {
    this.api = api;
    this.headers = baseHeaders;
  }

  header = (headers) => {
    this.headers = Object.assign({}, this.headers, headers);
    return this;
  };

  fetch = (options) => {
    try {
      const finalOptions = Object.assign({credentials: 'include', headers: this.headers}, options);
      return fetchApi(this.api, finalOptions)
        .then(res => res.json())
        .then(json => json)
        .catch(error => {
          throw error
        });
    } catch (err) {
      console.error(`fetch ${options.method} error : `, err);
    }
  };
  get = async () => {
    return await this.fetch({method: 'get'});
  };
  post = async (body) => {
    return await this.fetch({
      method: 'post',
      body: JSON.stringify(body)
    });
  };
  delete = async (body) => {
    return await this.fetch({
      method: 'delete',
      body: JSON.stringify(body)
    });
  };
  put = async (body) => {
    return await this.fetch({
      method: 'put',
      body: JSON.stringify(body)
    });
  };
}

export default ((api) => new Fetch(api));
