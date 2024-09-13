import React from 'react';
import styles from './LightComponent.module.css';

const LightComponent = (props) => {
  const { color, isActive } = props;
  return (
    <div
      id={styles.lightContainer}
      style={{
        backgroundColor: isActive ? color : 'white',
        border: `1px solid ${color}`,
      }}
    ></div>
  );
};

export default LightComponent;
