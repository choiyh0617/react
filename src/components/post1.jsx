// import usePostDetails from "../hooks/usepostdetail";

// const PostDetails = () => {
// 	const { detailsData } = usePostDetails();
// 	return (
// 		<div>
// 			{detailsData.length > 0 && (
//             <>
//                 <span>title: {detailsData.title}</span>
//                 <span>body : {detailsData.body}</span>
//                 <span>Author: {detailsData.userId}</span>
//             </>
//             )}
// 		</div>
// 	)
// }

// export default PostDetails;

import React from 'react';
import usePostDetails from '../hooks/usepostdetail';

const PostDetail = () => {
    const { detailData } = usePostDetails();
    return (
        <div>
            <span style={{ fontSize: '18px' }}>{detailData.title}</span>
            <br />
            <span>body: {detailData.body}</span>
            <br />
            <span>Author: {detailData.userId}</span>
        </div>
    );
};

export default PostDetail;