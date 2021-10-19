import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import Header from '../../Components/Header/Header';
import NewsList from '../../Components/NewsList/NewsList';
import Profile from '../../Components/Profile/Profile';
import AuthContext from '../../Contexts/AuthContext/AuthContext';

function UserPage(props) {
    const { token,
            handlerLogout,
            profile,
            news,
            handlerSetProfile,
            handlerSetNews
        } = useContext(AuthContext);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_CURRENT_URL}/private/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then( resp => {
            if (resp.status === 401) {
                throw new Error('пользователь не авторизован')
            }
            return resp.json()
        })
        .then( data => handlerSetProfile(data))
        .catch(e => {
            console.log(e.message);
            handlerLogout();
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect( () => {
        fetch(`${process.env.REACT_APP_CURRENT_URL}/private/news`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then( resp => {
            if (resp.status === 401) {
                throw new Error('пользователь не авторизован')
            }
            return resp.json()
        })
        .then( data => handlerSetNews(data))
        .catch(e => {
            console.log(e.message);
            handlerLogout();
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
            <div className='auth-page'>
                <Header>
                    <Profile profile={profile} handlerLogout={handlerLogout}/>  
                </Header>
                <NewsList list={news}/>
                {!token && <Redirect to='/'/>}
            </div>
    )
}

export default UserPage

