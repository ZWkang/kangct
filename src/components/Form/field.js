import React, { cloneElement, useEffect, useMemo, useReducer, useRef } from 'react';
import formContext from './formContext';

function Field(props) {
  const { name, children } = props;
  const contextValue = useContext(formContext);
  const [, forceUpdate] = useReducer((s) => s + 1, 0);
  const latestState = useRef({});

  const { formStore } = contextValue;

  const value = formStore.getFieldValue(name);

  useEffect(() => {
    latestState.current = value;
  });

  useEffect(() => {
    function checkUpdate() {
      const newFormStore = formStore.getFieldValue(name);

      if (newFormStore === latestState.current) {
        return;
      }

      forceUpdate();
    }

    checkUpdate();

    formStore.subscribe(checkUpdate);

    return () => formStore.unsubscribe(checkUpdate);
  }, [formStore]);

  const updateValue = useCallback(
    (value) => {
      return formStore.setFieldValue(value);
    },
    [formStore]
  );

  return cloneElement(children, {
    value,
    onChange: updateValue
  });
}

export default Field;
