import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePosts from '../hooks/useposts';

const PostList = () => {
    const navigate = useNavigate();

  const { postsData } = usePosts();

  return (
    <div>
      <h2>게시물 조회</h2>
      <div>
        {postsData.length &&
          postsData.map((item, idx) => (
            <div key={idx} onClick={() => navigate(`/posts/${item.id}`)}>
              <span>{item.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;
