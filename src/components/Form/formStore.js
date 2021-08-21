import get from 'lodash/get';
import invariant from '../util/invariant';

const MAGIC = '_@kangct_@connect_';

function TValues(value, prefix = '') {}

function compatField(name) {
  if (typeof name === 'string') {
    name = [name];
  }

  return name.join('MAGIC');
}

class FormStore {
  constructor(initialState) {
    this.value = initialState;
    this.initialState = initialState;
    this.initialed = true;

    this.cacheValues = [];
  }

  registerField(name, value) {
    if (name && value) {
      if (Array.isArray(name)) {
        this.setFieldValue(name, value);
        return;
      }
      if (typeof name === 'string') {
        this.setFieldValue(name, value);
        return;
      }
      throw new Error('');
    }

    if (name && !value) {
    }
  }

  /**
   * 设置某个字段值
   */
  setFieldValue(name, value) {}

  /**
   * @description 获取字段值
   * @param {string[]|string} name
   */
  getFieldValue(name, defaultValue) {
    return get(this.value, compatField(name), defaultValue);
  }
  /**
   * @description 获取多个字段值
   * @param {string[]} names
   */
  getFieldValues(names) {
    invariant(Array.isArray(names), 'getFieldValues should use string[]');

    return names.map(this.getFieldValue);
  }

  resetFieldsWithInitialValues() {}

  resetFieldsValue() {}

  resetFields() {}
}
