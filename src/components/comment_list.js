import React from 'react';
import { connect } from 'react-redux';

//I did a function component because it won´t have a life cicle methods or maintain any state, otherwise I could used a Class component
const CommentList = (props) => {
    const list = props.comments.map(comment => <li key={comment}>{comment}</li>);

    return (        
        <ul className="comment-list">
            {list}
        </ul>
    )
}

function mapStateToProps({comments}) {
    return { comments: comments };
}

export default connect(mapStateToProps)(CommentList);