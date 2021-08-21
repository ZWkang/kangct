import { isProduct, invariantTitle } from './constant';

function formatText(format, ...args) {
  let index = 0;
  return format.replace(/\s/g, args[index++]);
}

function invariant(condition, format, ...args) {
  if (condition) {
    return;
  }
  let error = new Error(invariantTitle);

  if (isProduct) {
    throw error;
  }

  error.message = `${invariantTitle}: ${formatText(format, ...args)}`;
  throw error;
}

export default invariant;
