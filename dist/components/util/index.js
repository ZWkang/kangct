'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // import cssProps

var _cssProps = require('./cssProps');

Object.keys(_cssProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cssProps[key];
    }
  });
});
exports.ensureSemi = ensureSemi;
exports.tinyDate = tinyDate;
exports.Object_omit = Object_omit;
exports.noop = noop;
exports.props = props;


// import React, { useState } from 'react';
/**
 * #f30067 红色
 * 6fc2d0 blue
 * #444444 灰色
 * #00d1cd success
 * #eaeaea grey
 */

// export const useToggle = ({ initial }) => {
//   const [on, toggle] = useState(initial);

//   return [on, toggle];
// };

/**
 * 确保css有分号
 */
function ensureSemi(val) {
  var value = val.trim();
  return value && value !== ';' ? value.slice(-1) === ';' ? value : value + ';' : '';
}

function tinyDate(str) {
  var hashKeys = {
    YYYY: 'getFullYear',
    YY: 'getYear',
    MM: function MM(d) {
      return d.getMonth() + 1;
    },
    DD: 'getDate',
    HH: 'getHours',
    mm: 'getMinutes',
    ss: 'getSeconds',
    fff: 'getMilliseconds'
  };
  var ReplaceTag = /{\w+?}/g;
}

function Object_omit(obj, props) {
  var result = new obj.constructor();
  for (var element in obj) {
    if (props.indexOf(element) < 0) {
      result[element] = obj[element];
    }
  }
  return result;
}

var transfromData = exports.transfromData = function transfromData(_ref) {
  var imageUrl = _ref.imageUrl;

  //   console.log(imageUrl);

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var image = new Image();
      image.src = imageUrl;
      image.crossOrigin = 'Anonymous';
      var arra = [];
      image.onload = function () {
        //将图片按像素写入画布
        context.drawImage(image, 0, 0, this.width, this.height);
        //读取图片某位置像素信息(x,y为需要读取的像素位置)
        // imageData = context.getImageData(x,y,1,1).data;
        // console.log(context);
        for (var i = 0; i < this.width; i++) {
          for (var j = 0; j < this.height; j++) {
            var data = context.getImageData(i, j, 1, 1).data;
            var result = [i, j, 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] / 255 + ')'];
            arra.push(result);
          }
        }
        resolve(arra);
      };
      image.onerror = function (e) {
        reject(e);
      };
    });
  });
};

function noop() {}

function props(key, path, unit, defaultValue) {
  if (defaultValue === undefined) {
    defaultValue = unit;
    unit = '';
  }
  return function (props) {
    if (props[path] !== undefined) {
      return key + ': ' + props[path] + unit + ';';
    }
    if (path && ~path.indexOf('.')) {
      var paths = path.split('.');
      var index = 0;
      var actual = props[paths[index++]];
      while (actual !== undefined && (typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) === 'object' && index < paths.length) {
        actual = actual[paths[index++]];
      }
      if (actual !== undefined) {
        return key + ': ' + actual + unit + ';';
      }
    }
    return key + ': ' + defaultValue + unit + ';';
  };
}