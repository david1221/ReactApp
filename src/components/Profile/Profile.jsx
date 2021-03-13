import React from 'react';
import MyPosts from './MyPosts/MyPosts';

import classes from './Profile.module.css';

function Profile() {
    return (
        <div className={classes.content} >
            <div >
                <img src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM" />
            </div>
            
            <div>
                ava
      </div>
           <MyPosts/>

        </div>
    );
}

export default Profile