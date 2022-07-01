import React from 'react';
import './emptyView.css';

const EmptyView = () => (
  <div className='emptyView-wrap'>
    <img src='https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif' alt='' />
    <p className='text-xl text-textColor font-semibold'>
        Oops! No such data found
    </p>
  </div>
);

export default EmptyView;