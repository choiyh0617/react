import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CONFIG from '../config/config.json';
import axios from 'axios';

const UsePostDetails = () => {
    // posts/1(id)
    const { id } = useParams();

    const [detailData, setDetailData] = useState({ title: '', body: '', userId: 0 });
    const [editData, setEditData] = useState({ title: '', body: ''})

    const getPostDetails = async () => {
        try {
        // /post/1 -> pathParameter,
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

    const handleEditData = useCallback((e) => {
        const {name,value} = e.target;
        setEditData((prev) => ({...prev, [name]:value}));
    }, [setEditData]);

    const patchPost = async() => {
        try{
            await axios.patch(`${CONFIG.server}/posts/${id}`, editData);
        } catch(error){
        }
    }

    const deletePost = async() => {
        try{
            await axios.delete(`${CONFIG.server}/posts/${id}`);
        } catch(error){
        }
    }

    return {
        detailData,
        editData,
        handleEditData,
        patchPost,
        deletePost,
    };
};

export default UsePostDetails;