import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader: React.FC = (props: any) => (
  <ContentLoader
    speed={3}
    width={'45%'}
    height={'5%'}
    viewBox='0 0 400 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#f5c2c2'
    {...props}
  >
    <rect x='61' y='136' rx='2' ry='2' width='500' height='100' />
    <circle cx='649' cy='632' r='120' />
  </ContentLoader>
);

export default MyLoader;
