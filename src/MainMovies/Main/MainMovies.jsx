import { useEffect, useState } from 'react'
import './MainMovies.css'
import HapBirthday from '../HappyBirthday/HapBirthday';
import AppMovies from '../AppMovies';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Pricing from '../Pages/Pricing/Pricing';
import Contact from '../Pages/ContactPage/Contact';
import About from '../Pages/AboutPage/About';
import NotFound from '../Pages/PageNotFound/NotFound';
import WatchPage from '../Pages/WatchPage/WatchPage';

const MainMovies = ({ user, dateBirth, setIsFormValid }) => {

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
        <BrowserRouter>

            <>
                {isYourBirthday && !isClosed && (
                    <HapBirthday user={user} setIsClosed={setIsClosed} />
                )}
                {(!isYourBirthday || isClosed) && (
                    <AppMovies />
                )}
            </>
            <Routes>
                <Route path='/' element={<Navigate to={"/home"} replace />} />
                <Route path='/home' index={true} element={<><HomePage /></>} />
                <Route path='/pricing' element={<><Pricing /></>} />
                <Route path='*' element={<><NotFound /></>} />
                <Route path='/About' element={<><About /></>} />
                <Route path='/Contact' element={<><Contact /></>} />
                <Route path='/Watch/:id' element={<><WatchPage /></>} />

            </Routes>
        </BrowserRouter>
    )
}

export default MainMovies