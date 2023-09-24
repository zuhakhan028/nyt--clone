import "./commentsButton.css"

interface commentsButton {
    link: "string"
}
const CommentsButton: React.FC<commentsButton> = (props) => {
    return (
        <div>
               <a href={props.link} className="comment-button-link">
        <div className="comment-button">
         
              
                    READ MORE
               
           
        </div>
        </a>
        </div>
    )
}

export default CommentsButton