import React from 'react';
import styles from './Categories.module.scss';

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
};

export const categories = ['Frontend', 'Backend'];

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((res, idx) => (
          <li
            key={idx}
            onClick={() => onClickCategory(idx)}
            className={value === idx ? styles.active : ''}
          >
            {res}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
