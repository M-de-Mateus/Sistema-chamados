import {  useState, useEffect, createContext } from 'react';
import firebase from '../services/firebaseconnection';


export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        function loadStorage(){
            const storageUser = localStorage.getItem('SitemaChamados')

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }   
        
        loadStorage();
    }, [])

    async function signUp(email, password, name){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async (value)=>{
            let uid = value.user.uid;

            await firebase.firestore().collection('users')
            .doc(uid).set({
                nome: name,
                avatarUrl: null,
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: name,
                    email: value.user.email,
                    avatarUrl: null
                };

                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch((error)=>{
            console.log('Erro: ' + error);
            setLoadingAuth(false);
        })
    }

    function storageUser(data){
        localStorage.setItem('SistemaChamados', JSON.stringify(data));
    }

    async function signOut(){
        await firebase.auth().signOut();
        localStorage.removeItem('SistemaChamados');
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{ signed: !!user,
        user,
        loading, 
        signUp,
        signOut 
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;