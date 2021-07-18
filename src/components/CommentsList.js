
import React from 'react' 
import Item from './CommentsItem';
import { MdDelete } from 'react-icons/md';


export const CommentsList = ({comments, handleEdit, handleDelete, clearComments}) => {

    return (
        <>
            <ul className="List">

                {comments.map((comment) => {
                    return <Item key={comment.id} comment={comment} handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    /> ;
                })}


            </ul>
            {comments.length > 0 && ( 
            <button className="btn" onClick={clearComments}> 
                Clear Comments
                <MdDelete className="btn-icon"/>
            </button>
            
            )}
    
        </>


    )

}

export default CommentsList;