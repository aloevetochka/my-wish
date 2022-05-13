const host = '';
const api = process.env.REACT_APP_API_URL;

export default {
  homePath: () => [host, null].join('/'),
  apiBasePath: () => api,
};
