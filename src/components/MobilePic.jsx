import React from 'react';

const Mobile = () => {
  return (
    <div className='mobilePic'>
    <div className='col-md-4'>
        <img src="/images/mobile-pic.jpg" alt="Mobile Netflix" class="mobNetflix" />
        </div>
        <div className='downloadingPart col-md-6'>
        <p className='mobile-text col-lg-12'>Stranger Things</p>
        <p className='downloading'>Downloading...</p>
        <img src="/images/boxshot.png" alt="Mobile Netflix" class="mobNetflix2" />
        <img src="/images/download-icon.gif" alt="Mobile Netflix" class="mobNetflix3" />
        </div>
    </div>
  );
};

export default Mobile;