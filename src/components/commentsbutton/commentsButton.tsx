import "./commentsButton.css"

interface commentsButton{
    link:"string"
}
const CommentsButton: React.FC<commentsButton> = (props) => {
    return (
        <div className="comment-button">
            <a href={props.link} className="comment-button-link">
            READ MORE
            </a>    
        </div>
    )
}

export default CommentsButton