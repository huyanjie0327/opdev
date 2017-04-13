import axios from 'axios'
import qs from 'qs'

var http = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    data = qs.stringify(data)
    return data
  }]
})

export default http
