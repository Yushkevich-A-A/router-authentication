import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Profile from '../../Components/Profile/Profile';
import Header from '../../Components/Header/Header';
import AuthContext from '../../Contexts/AuthContext/AuthContext';
import Post from '../../Components/NewsList/News/Post/Post';
import './PostPage.css';

function PostPage(props) {
    const { match } = props;
    const { token, profile, handlerLogout } = useContext(AuthContext);
    const [ post, setPost ] = useState(null);
    const [ notFound, setNotFound ] = useState(false);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_CURRENT_URL}/private/news/${match.params.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then( resp => {
            if (resp.status === 404) {
                throw new Error('Запрашиваемого ресурса не существует')
            }
            return resp.json();
        }).then( data => setPost(data))
        .catch( (e) => {
            console.log(e.message);
            setNotFound(!notFound);
        })
        // eslint-disable-next-line
    }, [])

    return (
        <div className='post-page'>
            <Header>
                <Profile profile={profile} handlerLogout={handlerLogout}/>  
            </Header>
                <div className="post">
                    { post && <Post item={post}/> }
                </div>
            { notFound && <Redirect to='/not-found' />}
            { !token && <Redirect to='/'/> }
        </div>
    )
}

PostPage.propTypes = {
    match: PropTypes.object.isRequired,
};

export default PostPage;

