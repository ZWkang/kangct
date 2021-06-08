import React, { useReducer } from 'react';

function useForceUpdate() {
  const [, forceUpdate] = useReducer((s) => s + 1, 0);
  return forceUpdate;
}

export default useForceUpdate;
