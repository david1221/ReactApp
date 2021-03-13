import React from 'react';

import classes from './MyPosts.module.css';

function MyPosts() {
    return (

        <div>
            my posts
                  <div>
                   new post
                    </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    post1
                  </div>
                <div className={classes.item}>
                    post2
                </div>
            </div>
        </div>


    );
}

export default MyPosts