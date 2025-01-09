import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CONFIG from '../config/config.json';
import axios from 'axios';

const UsePostDetails = () => {
  // posts/1(id)
    const { id } = useParams();

    const [detailData, setDetailData] = useState({ title: '', body: '', userId: 0 });

    const getPostDetails = async () => {
        try {
        // /posts/{id}, posts?id=1&name=test&page=1 (query string)
            await axios.get(`${CONFIG.server}/posts/${id}`).then((res) => {
            setDetailData(res.data);
        });
        } catch (error) {
            console.log(error);
            }
    };
    useEffect(() => {
        getPostDetails();
    }, []);

    return {
        detailData,
    };
};

export default UsePostDetails;