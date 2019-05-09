import ajax from "./ajax";
import upload from "./upload";
import regex from "./regex";

let delay = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export { ajax, upload, regex, delay };
