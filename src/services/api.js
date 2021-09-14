import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  params: {
    api_key: '4c56117fc51c27d062fc540fc8f21c7e',
  },
})

export default api