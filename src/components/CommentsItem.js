import React from 'react'
import  {MdEdit, MdDelete} from "react-icons/md";

export const commentsItem = ({comment, handleEdit, handleDelete, }) => {
    const {id ,author, content} = comment
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{author}</span>
                <span className="amount">{content}</span>
                
            </div>
            <button className="edit-btn" aria-label="edit button" onClick={() => handleEdit(id)}>
                <MdEdit />
            </button>
            <button className="clear-btn" aria-label="delete button" onClick={() => handleDelete(id)} >
               <MdDelete />
           </button>
        </li>
    );
};

export default commentsItem;
