import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import {getAuth, onAuthStateChanged} from "firebase/auth";
import UserGuestScreen from './UserGuestScreen/UserGuestScreen';
import UserLoggedScreen from './UserLogedScreen/UserLoggedScreen';
import LoadingModal from '../../components/Shared/LoadingModal/LoadingModal';


const AccountScreen=()=> {
  const[hasLogged, setHasLogged]=useState(null);

useEffect(()=>{
    const auth = getAuth();//otener la sesion
    onAuthStateChanged(auth,(user)=>{ //verificar si la sesion cambia
      
      setHasLogged(user!=null ? true : false);
    })
},[]);

if(hasLogged==null){
  return <LoadingModal show={true} text="Cargando" />;
}

  return hasLogged==true ? <UserLoggedScreen/> : <UserGuestScreen/>;
};

export default AccountScreen;