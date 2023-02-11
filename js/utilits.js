"use strict";
const $$ = (selectors) => document.querySelectorAll(selectors);
const $ = (selector) => document.querySelector(selector);

const createFunction = (tagName, className, content) => {
  const element = document.createElement(tagName);
  if (className) {
    element.setAttribute("class", className);
  }

  if (content) {
    element.innerHTML = content;
  }

  return element;
};
