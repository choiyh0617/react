import { useState, useEffect } from 'react';
import axios from 'axios';
import CONFIG from '../config/config.json';

const usePost = () => {
    const [postsData, setPostsData] = useState({ title: '', body: '' });

    const getPosts = async () => {
        try {
            await axios.get(`${CONFIG.server}/posts`).then((res) => {
            setPostsData(res.data); // 서버에서 받아온 데이터
        });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return {
        postsData,
    };
};

export default usePost;