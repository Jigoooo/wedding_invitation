import React, { SyntheticEvent } from 'react';

import noImage from '../assets/svg/no_image.svg';

interface WeddingImgComponentProps {
  style?: React.CSSProperties;
  src: string;
}

function WeddingImgComponent({
  style,
  src,
}: Readonly<WeddingImgComponentProps>) {
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>): void => {
    e.currentTarget.src = noImage;
  };

  return (
    <div style={{ backgroundColor: '#F0F0F0' }}>
      <img style={style} src={src} alt='' onError={handleError} />
    </div>
  );
}

export default WeddingImgComponent;
