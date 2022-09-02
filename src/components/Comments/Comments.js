import './Comments.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import commentBtn from '../../assets/icons/add_comment.svg';
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';

function formatDate(date) {
    return (date.getMonth() + 1).toString().padStart(2, '0') + "/" + date.getDate().toString().padStart(2, '0') + "/" + date.getFullYear()
}

function comments(props) {
    let commentSection = props.comments.comments.map((element, i) =>
        <div key={element.id} className='comment__container'>
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
        <section className='comment__all'>
            <section className='meta__all-data'>
                <h3 className='meta__title'>{props.comments.title}</h3>
                <div className='meta__container'>
                    <div className='meta__divider mobile-only'></div>
                    <span className='meta__item-title'>By {props.comments.channel}</span>
                    <div className='meta__views meta__item'>
                        <img src={views} alt="video view icon" />
                        <span className='meta__item-value'>{props.comments.views}</span>
                    </div>
                    <span className='meta__item meta__date'>{formatDate(new Date(props.comments.timestamp))}</span>
                    <div className='meta__item meta__likes'>
                        <img src={likes} alt="video like icon" />
                        <span className='meta__item-value'>{props.comments.likes}</span>
                    </div>
                    <div className='meta__divider'></div>
                    <span className='meta__description'>{props.comments.description}</span>
                </div>

            </section>
            <section className="comment">
                <div className="comment__main">
                    <h2 className="comment__number-of-comments">{props.comments.comments.length} Comments</h2>
                    <h2 className="comment__title">Join the Conversation</h2>
                    <div className="comment__add">
                        <div className="comment__avatar"><img className="comment__avatar__img" src={avatar} alt="comment avatar icon" /></div>
                        <div className="comment__form">
                            <form id="comment__form" className='comment__form-entry'>
                                <textarea className="comment__textentry" type="text" id="comment__textbox" name="comment__textbox"
                                    placeholder="Add a new comment"></textarea>
                                <button className="comment__button">
                                    <img src={commentBtn} alt="comment button icon" className="comment__comment-btn-icon" />COMMENT
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