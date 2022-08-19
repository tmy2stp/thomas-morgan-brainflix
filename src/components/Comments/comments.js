import './comments.scss';

function comments(props) {
    console.log("comments="+ props.setComments.comments);
    let commentSection = props.setComments.comments.map((element, i) =>
        <div className='comment__container'>
            <div className='comment__avatar--container'>
                <div className='comment__avatar--entered'></div>
            </div>
            <div className='comment__metadata'>
                <div className='comment__author'>{element.name}</div>
                <div className='comment__date'>{element.timestamp}</div>
                <div className='comment__text'>{element.comment}</div>
            </div>
        </div>
    );
    return (
        <section>
        <section class="comment">
        <h2 class="comment__title">Join the Conversation</h2>
        <div class="comment__main">
            <div class="comment__add">
                <div class="comment__avatar"><img class="comment__avatar__img" src="../../assets/images/Mohan-muruge.jpg" alt="" /></div>
                <div class="comment__form">
                    <form id="comment__form">
                        <label class="comment__label" for="name">NAME</label>
                        <input class="comment__name" type="text" id="name" name="name"
                            placeholder="Enter your name" />
                        <label class="comment__label" for="comment__textbox">COMMENT</label>
                        <textarea class="comment__textentry" type="text" id="comment__textbox" name="comment__textbox"
                            placeholder="Add a new comment"></textarea>
                        <button class="comment__button">COMMENT</button>
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