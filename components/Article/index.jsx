import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Article = ({
  className,
  backUrl,
  children
}) => {
  return (
    <article className={cl(className, styles.article)}>
      <Link legacyBehavior href={backUrl}>
        <a className={styles.articleBack}>
          <AiOutlineArrowLeft />
        </a>
      </Link>
      <div className={styles.articleContent}>
        {children}
      </div>
    </article>
  )
}

export default Article;