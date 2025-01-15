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

import React, { useState } from 'react';
import usePostDetails from '../hooks/usepostdetail';

const PostDetail = () => {
    const { detailData, editData, handleEditData, patchPost, deletePost } = usePostDetails();
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            {isEditing ? (//참일때는 첫번째 괄호 안에 있는 것을 랜더링
                <>
                    <input placeholder={detailData.title} name='title' onChange={handleEditData}/>
                    <br/>
                    <input placeholder={detailData.body} name='body' onChange={handleEditData}/>
                    <br/>
                    <button onClick={patchPost}>수정</button>
                </>
            ) : (//거짓이면 밑에 있는 뷰 랜더링
                <>
                    <span style={{ fontSize: '18px' }}>{detailData.title}</span>
                    <br />
                    <span>body: {detailData.body}</span>
                    <br />
                    <span>Author: {detailData.userId}</span>
                    <br/>
                    <button onClick={()=> setIsEditing(true)}>수정하기</button>
                    <button onClick={deletePost}>삭제하기</button>

                </>
            )}
        </div>
    );
};

export default PostDetail;