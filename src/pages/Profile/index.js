import { useState, useContext } from 'react';
import './profile.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import avatar from '../../assets/avatar.png'

import { FiSettings, FiUpload } from 'react-icons/fi';

import { AuthContext } from '../../contexts/auth';

export default function Profile(){

    const { user } = useContext(AuthContext);

    const { nome, setNome} = useState(user && user.nome);
    const { email, setEmail} = useState(user && user.email);
    const { avatarUrl, setAvatarUrl } = useState(user && user.avatarUrl);

    return(
        <div>
            <Header/>
            <div className='content'>
                <Title nome='Meu perfil'>
                    <FiSettings size={25} />
                </Title>
            

                <div className='container'>
                    <form className='form-profile'>
                        <label className='label-avatar'>
                            <span>
                                <FiUpload color="#FFF" size={25}/>
                            </span>

                            <input type="file" accept='image/*'/><br/>
                            { avatarUrl === null ? 
                                <img src={avatar} width='250' height='250' alt="Foto de perfil do usuário" />
                                :
                                <img src={avatarUrl} width='250' height='250' alt="Foto de perfil do usuário" />
                            }
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}