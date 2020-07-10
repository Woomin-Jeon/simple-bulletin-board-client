import React, {useEffect, useState} from 'react';
import { apiGetPost } from '../apis/api';

const getData = async (setData) => {
  const { postDB } = await apiGetPost();
  setData(postDB);
}

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(setData);
  }, []);

  return (
    <div>
      {data.map(v =>
        <div>
          {v}
        </div>
      )}
    </div>
  );
};

export default Posts;
