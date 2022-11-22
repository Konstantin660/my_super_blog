import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';
import ScreenEgg from '../ScreenEgg';

const ByMeCoffee = ({
  className,
}) => {
  return (
    <ScreenEgg type='right'>
      <div className={cl(styles.buyCoffee, className)}>
        <a href="https://stripe.com/"
          target="_blank" className={styles.buyCoffeeButton} rel="noreferrer">
          Buy me a coffee...
        </a>
      </div>
    </ScreenEgg>
  )
}

export default ByMeCoffee;