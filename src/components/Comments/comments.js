import './comments.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import commentBtn from '../../assets/icons/add_comment.svg';

function formatDate(date) {
    return (date.getMonth() + 1).toString().padStart(2, '0') + "/" + date.getDate().toString().padStart(2, '0') + "/" + date.getFullYear()
}

function comments(props) {
    let commentSection = props.setComments.comments.map((element, i) =>
        <div className='comment__container'>
            <div className='comment__avatar--container'>
                <div className='comment__avatar--entered'></div>
            </div>
            <div className='comment__metadata'>
                <div className='comment__author'>{element.name}</div>
                <div className='comment__date'>{formatDate(new Date(element.timestamp))}</div>
                <div className='comment__text'>{element.comment}</div>
            </div>
        </div>
    );
    return (
        <section>
        <section class="comment">
        <div class="comment__main">
        <h2 class="comment__number-of-comments">{props.setComments.comments.length} Comments</h2>
        <h2 class="comment__title">Join the Conversation</h2>
            <div class="comment__add">
                <div class="comment__avatar"><img class="comment__avatar__img" src={avatar} alt="" /></div>
                <div class="comment__form">
                    <form id="comment__form" className='comment__form-entry'>
                        <textarea class="comment__textentry" type="text" id="comment__textbox" name="comment__textbox"
                            placeholder="Add a new comment"></textarea>
                        <button class="comment__button">
                        <img src={commentBtn} alt="" className="comment__comment-btn-icon" />COMMENT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section className='comment__main'>
        {commentSection}
    </section>
    </section>
    );
}

export default comments