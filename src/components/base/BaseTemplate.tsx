import React from 'react';
import HeaderContainer from '../../containers/base/HeaderContainer';

type BaseTemplateProps = {
  children: React.ReactNode;
};

function BaseTemplate({ children }: BaseTemplateProps) {
  return (
    <>
      <HeaderContainer />
      {children}
    </>
  );
}

export default BaseTemplate;
