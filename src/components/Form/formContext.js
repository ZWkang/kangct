import React from 'react';

const formContext = React.createContext({});

export const Provider = (props) => {
  const { children, value } = props;
  return <formContext.Provider value={value}>{children}</formContext.Provider>;
};

export default formContext;
