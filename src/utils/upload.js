import axios from "axios";
import store from "@/store";
import { Message } from "element-ui";

let upload = {};

upload.axios = axios.create({
  baseURL: process.globalConfig.baseUrl
});

//异步拦截器response配置
upload.axios.interceptors.response.use(
  response => {
    if (response.data.code != "0000") {
      Message.error(response.data.msg);
      return Promise.reject(response.data);
    }
    return response.data;
  },
  error => {
    Message.error(error.message);
    return Promise.reject(error);
  }
);

upload.post = function(config) {
  let data = config.data || {};
  let loading = config.loading !== undefined ? config.loading : true; //loading监听
  let from = new FormData();

  config.method = config.type;
  delete config.type;
  delete config.loading;

  for (let key in data) {
    from.append(key, data[key]);
  }

  config.data = from;

  var ajax = upload.axios(config);
  if (loading) {
    store.commit("updateLoading", true);
    store.dispatch("globalLoading", ajax);
  }
  return ajax;
};

export default upload.post;
