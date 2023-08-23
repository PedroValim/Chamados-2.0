import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';     
import { loadBundle } from 'firebase/firestore';

export default function Private ({ children}){      //verifica se possui usuario logado, se estiver, retorna true senao false
    const { signed, loading } = useContext(AuthContext);
  
    if(loading){
        return(
            <div>       
            </div>
        )
    }

    if (!signed){                     // Se estiver logado, TRUE, manda para deshboar, senao, volta para a pagina de login
        return <Navigate to = "/"/>
    }

    return children;
}