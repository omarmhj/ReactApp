import React from 'react'
import { MdSend } from "react-icons/md"

export const Comments = ({
    author,
    content,
    handleAuthor,
    handleContent,
    handleSubmit,
    edit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="author"
                        name="author" 
                        placeholder="author"
                        value= {author}
                        onChange={handleAuthor} />
                </div>
                <div className="form-group">
                    <label htmlFor="content">comment</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="content"
                        name="content" 
                        placeholder="commentaire"
                        value= {content}
                        onChange={handleContent} />
                </div>
            </div>
            <button type="submit" className="btn">
                {edit ? "edit" : "submit"}
                <MdSend className="btn-icon" />
           </button>
        </form>
    )
}
export default Comments ;