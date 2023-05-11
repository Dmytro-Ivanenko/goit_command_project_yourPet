import React from 'react';

import UserRoutes from './UserRoutes';

import styles from './sass/base.module.scss';

export const App = () => {
  return (
    <div className={styles.container}>
      <UserRoutes />
    </div>
  );
};
