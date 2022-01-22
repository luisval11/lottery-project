import React from 'react';

export const LinkA = ({href, ...rest}) => {
  return <a href={href} {...rest} />;
};
