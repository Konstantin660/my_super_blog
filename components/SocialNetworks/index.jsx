import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import ScreenEgg from '../ScreenEgg';


const socialNetworks = [
  {
    id: 1,
    href: 'https://www.youtube.com/watch?v=4AP4BAX9BK8',
    icon: AiFillYoutube,
  },
  {
    id: 2,
    href: 'https://github.com/Konstantin660?tab=repositories',
    icon: AiFillGithub,
  },
  {
    id: 4,
    href: 'https://ru.wikipedia.org/wiki/Instagram',
    icon: AiFillInstagram,
  },
]

const SocialNetwork = ({
  className,
}) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((socialNetworks) => (
          <li key={socialNetworks.id} className={styles.listItem}>
            <a href={socialNetworks.href} target="_blank" className={styles.listLink} rel="noreferrer">
              {React.createElement(
                socialNetworks.icon,
                {
                  color: 'black',
                  size: 50
                }
              )}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  )
}

export default SocialNetwork;