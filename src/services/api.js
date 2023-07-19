import axios from 'axios';

const { REACT_APP_DATABASE_URL } = process.env;

axios.defaults.baseURL = REACT_APP_DATABASE_URL;

const normalizeBrends = items => {
  const itemsNormalize = items.map(({ itemTitle = '', imgUrl, brends, id }) => {
    const brendsNormalize = brends
      ? Object.entries(brends).map(([id, brend = []]) => {
          if (typeof brend === 'string') {
            return { id, brend };
          }
          return { id, ...brend };
        })
      : [];

    return { itemTitle, imgUrl, brends: [...brendsNormalize], id };
  });
  return itemsNormalize;
};

const getData = endpoint => {
  return axios
    .get(`${endpoint}.json`)
    .then(({ data = [] }) =>
      data ? Object.entries(data).map(([id, data]) => ({ id, ...data })) : [],
    )
    .then(items => normalizeBrends(items));
};

const addItemApi = (endpoint, item, token) => {
  return axios
    .post(`${endpoint}.json`, item, {
      params: {
        auth: token,
      },
    })
    .then(response => ({ ...item, id: response.data.name }));
};

const editItemApi = ({ endpoint, item, id, token }) => {
  return axios
    .patch(`${endpoint}/${id}.json`, item, {
      params: {
        auth: token,
      },
    })
    .then(response => ({ ...response.data, id }));
};

const deleteItemApi = ({ endpoint, item, id }) => {
  return axios
    .delete(`${endpoint}/${id}.json`, item)
    .then(response => ({ ...response.data, id }));
};

// BREND =======

const addBrendApi = ({ endpoint, brend }) => {
  return axios
    .post(`${endpoint}/brends.json`, { brend })
    .then(({ data }) => ({ id: data.name, brend }));
};

const editBrendApi = ({ endpoint, item, id }) => {
  return axios
    .patch(`${endpoint}/brends/${id}.json`, item)
    .then(response => ({ ...response.data, id }));
  // .then(response => console.log(response));
};

const deleteBrendApi = ({ endpoint, id }) => {
  // console.log('endpoint', endpoint);
  return axios
    .delete(`${endpoint}/brends/${id}.json`)
    .then(response => ({ ...response.data, id }));
  // .then(response => console.log(response));
};

export {
  getData,
  addItemApi,
  editItemApi,
  deleteItemApi,
  // , editItem, deleteItem
  addBrendApi,
  editBrendApi,
  deleteBrendApi,
};
