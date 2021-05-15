// import cssProps

export * from './cssProps';

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
export function ensureSemi(val) {
  const value = val.trim();
  return value && value !== ';' ? (value.slice(-1) === ';' ? value : `${value};`) : '';
}

export function tinyDate(str) {
  let hashKeys = {
    YYYY: 'getFullYear',
    YY: 'getYear',
    MM: function (d) {
      return d.getMonth() + 1;
    },
    DD: 'getDate',
    HH: 'getHours',
    mm: 'getMinutes',
    ss: 'getSeconds',
    fff: 'getMilliseconds'
  };
  let ReplaceTag = /{\w+?}/g;
}

export function Object_omit(obj, props) {
  const result = new obj.constructor();
  for (let element in obj) {
    if (props.indexOf(element) < 0) {
      result[element] = obj[element];
    }
  }
  return result;
}

export const transformData = ({ imageUrl }) => {
  //   console.log(imageUrl);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var image = new Image();
      image.src = imageUrl;
      image.crossOrigin = 'Anonymous';
      const arr = [];
      image.onload = function () {
        //将图片按像素写入画布
        context.drawImage(image, 0, 0, this.width, this.height);
        //读取图片某位置像素信息(x,y为需要读取的像素位置)
        // imageData = context.getImageData(x,y,1,1).data;
        // console.log(context);
        for (var i = 0; i < this.width; i++) {
          for (var j = 0; j < this.height; j++) {
            const data = context.getImageData(i, j, 1, 1).data;
            const result = [i, j, `rgba(${data[0]},${data[1]},${data[2]},${data[3] / 255})`];
            arr.push(result);
          }
        }
        resolve(arr);
      };
      image.onerror = function (e) {
        reject(e);
      };
    });
  });
};

export function noop() {}

export function props(key, path, unit, defaultValue) {
  if (defaultValue === undefined) {
    defaultValue = unit;
    unit = '';
  }
  return (props) => {
    if (props[path] !== undefined) {
      return `${key}: ${props[path]}${unit};`;
    }
    if (path && ~path.indexOf('.')) {
      const paths = path.split('.');
      let index = 0;
      let actual = props[paths[index++]];
      while (actual !== undefined && typeof actual === 'object' && index < paths.length) {
        actual = actual[paths[index++]];
      }
      if (actual !== undefined) {
        return `${key}: ${actual}${unit};`;
      }
    }
    return `${key}: ${defaultValue}${unit};`;
  };
}
