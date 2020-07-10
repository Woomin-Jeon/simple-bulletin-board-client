import React, {useState} from 'react';
import { apiAddPost } from '../apis/api';

const Writing = () => {
  const [contents, setContents] = useState("");

  const getContents = (contents) => {
    setContents(contents);
  };

  const addPost = async () => {
    await apiAddPost(contents);
  }

  return (
    <div>
      <textarea onChange={(e) => getContents(e.target.value)}>
      </textarea>
      <button onClick={addPost}>등록</button>
    </div>
  );
};

export default Writing;
