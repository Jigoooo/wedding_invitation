import React from 'react';

import './WeddingMainPage.css';
import WeddingImgComponent from '../../components/WeddingImgComponent';
import noImage from '../../assets/svg/no_image.svg';

function WeddingMainPage(): React.JSX.Element {
  return (
    <div className={'wedding-card'}>
      <h1>2024.12.14</h1>
      <h2>Saturday</h2>
      <WeddingImgComponent style={{ width: '100%' }} src={noImage} />
      <p>123</p>
    </div>
  );
}

export default WeddingMainPage;
