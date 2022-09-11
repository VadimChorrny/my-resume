import axios from 'axios';
import React from 'react';
import styles from './Work.module.scss';

interface WorkProps {}

const Work: React.FC<WorkProps> = () => {
  const [data, setData] = React.useState<any>();

  React.useEffect(() => {
    try {
      axios
        .get(`https://631493a9fa82b738f74a2534.mockapi.io/works`)
        .then((res) => setData(res.data));
    } catch (error) {
      console.error('error', console.error(error));
    }
    console.log('data', data);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Works</h1>
      <br />
      <br />
      <div className={styles.parent}>
        {data ? (
          data.map((res: any, idx: number) => (
            <div key={idx} className={styles.child}>
              <h1>{res.name}</h1>
              <br />
              <h5>{res.description}</h5>
              <br />
              <ul>
                {res.technology.map((res: string, idx: number) => (
                  <li key={idx}>{res},</li>
                ))}
              </ul>
              <br />
              <br />
              <br />
              <a href={res.link} target='_blanc'>
                Show
              </a>
            </div>
          ))
        ) : (
          <h1>Not Found</h1>
        )}
      </div>
    </div>
  );
};

export default Work;
