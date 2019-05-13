import React from 'react';
import T from 'prop-types';
import s from './NotFound.module.scss';

function NotFound() {
  return <div className={s.container}><h1>404 Not Found</h1></div>;
}

NotFound.propType = [];

export default NotFound;
