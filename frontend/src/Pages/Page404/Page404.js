import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Header from '../../Components/Header/Header';
import Profile from '../../Components/Profile/Profile';
import AuthContext from '../../Contexts/AuthContext/AuthContext';
import './Page404.css';
import AdmitButton from '../../Components/AdmitButton/AdmitButton';


function Page404(props) {
    const { token, profile, handlerLogout } = useContext(AuthContext);

return (
        <div className='page-404'>
            <Header>
                <Profile profile={profile} handlerLogout={handlerLogout}/>  
            </Header>
            <div className="body-404">
                <div className="block-404">
                    <h3 className='not-found-h3'>404</h3>
                    <p className='not-found'>Нет такой страницы</p>
                </div>
                
                <Link to='/news'>
                    <AdmitButton name='вернуться на главную' />
                </Link>
            </div>
            

            {!token && <Redirect to='/'/>}
        </div>
)
}

Page404.propTypes = {

}

export default Page404

