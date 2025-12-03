import React, { useEffect, useState } from 'react'
import './MainMovies.css'
import HapBirthday from '../HappyBirthday/HapBirthday';
import AppMovies from '../AppMovies';
import { BrowserRouter } from 'react-router-dom';

const MainMovies = ({user, dateBirth}) => {
    const [isYourBirthday, setIsYourBirthday] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    
    useEffect(() => {
        if (dateBirth) {
            const dateUser = dateBirth.split("-");
            const date = new Date();
            if (date.getMonth() + 1 === parseInt(dateUser[1]) && date.getDate() === parseInt(dateUser[2])) {
                setIsYourBirthday(true);
            }
        }
    }, [dateBirth]);

    return (
        <>
        
        {isYourBirthday && !isClosed && (
                <HapBirthday user={user} setIsClosed={setIsClosed}/>
            )}
            {(!isYourBirthday || isClosed) && (
                <AppMovies />
            )}
            
        </>
    )
}

export default MainMovies