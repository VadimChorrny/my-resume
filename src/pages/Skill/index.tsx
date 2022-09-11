import axios from 'axios';
import React from 'react';
import Categories from '../../components/Categories';
import Pagination from '../../components/Pagination';
import SkillItem from '../../components/SkillItem';
import MyLoader from './Loader';
import styles from './Skill.module.scss';

type SkillType = {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
};

const Skills: React.FC = () => {
  const [data, setData] = React.useState<any>();
  const [currentPage, setCurrentPage] = React.useState<number>(1); // first page
  const [categoryId, setCategoryId] = React.useState<number>(3);

  const getData = async () => {
    const category = categoryId === 3 ? `` : `types=${categoryId}`;
    console.log(categoryId);
    try {
      axios
        .get(
          `https://631493a9fa82b738f74a2534.mockapi.io/skills?page=${currentPage}&limit=4&${category}`,
        )
        .then((res) => setData(res.data));
    } catch (error) {
      console.error('error', error);
    }
    console.log('data', data);
  };

  React.useEffect(() => {
    getData();
  }, [currentPage, categoryId]);

  const loaders = [...new Array(10)].map((_, idx) => <MyLoader key={idx} />);

  return (
    <div className={styles.root}>
      <h1>Skills</h1>

      <Categories
        value={categoryId}
        onClickCategory={(id) => setCategoryId(id)} // props drilling
      />

      <div className={styles.container}>
        {data ? (
          <div className={styles.parent}>
            <div>
              {data
                .slice(0, data.length / 2)
                .map((skill: SkillType, idx: number) => (
                  <SkillItem {...skill} key={idx} />
                ))}
            </div>
            <div>
              {data
                .slice(data.length / 2)
                .map((skill: SkillType, idx: number) => (
                  <SkillItem {...skill} key={idx} />
                ))}
            </div>
          </div>
        ) : (
          loaders
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        onChangePage={(number: number) => setCurrentPage(number)}
        pageAmount={data?.length}
      />
    </div>
  );
};

export default Skills;
