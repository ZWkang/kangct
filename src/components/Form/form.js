import React from 'react';
import styled from 'styled-components';

let id = 0;
function generatorRandomForm() {
  return `form-${id++}`;
}

/**
  field state
  untouched 字段尚未触及
  touched 字段已被触及
  pristine 该字段尚未修改
  dirty 该字段已被修改
  invalid 字段内容无效
  valid 字段内容有效
 */

/**
  form state
  pristine 没有字段进行过修改
  dirty 一个或者多个被修改
  invalid form 表单内容无效
  valid form 内容有效
  submitted 这个表单已经提交了
 */

/**
  但是我才不要做那么多呢！！！
 */

/**
 * 按照规范每个form section应该还有个title的
 */

function Form(props) {
  const { title = generatorRandomForm, Component = 'form', children } = props;

  return (
    <Component role="form" aria-labelledby={title} onSubmit={() => {}}>
      {children}
    </Component>
  );
}

Form.defaultProps = {};

Form.propTypes = {};

export default Form;
