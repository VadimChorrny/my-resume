import React from 'react';
import styles from './SkillItem.module.scss';

type SkillProps = {
  id: number;
  name: string;
  imageUrl: string;
};

const SkillItem: React.FC<SkillProps> = ({ name, imageUrl }) => {
  return (
    <div className={styles.root}>
      <span>{name}</span>
      <img src={imageUrl} alt='img' />
    </div>
  );
};

export default SkillItem;
