import { useEffect, useRef } from 'react';
import { useLocalStorage } from '../../../utils/UserLocalStorage';
import SunTheme from '../../SunTheme/SunTheme';
import MoonTheme from '../../MoonTheme/MoonTheme';

export default function ButtonDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light');

    const btnRef = useRef(null);


    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active');

        } else {
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn--active');
        }
    }, [darkMode]);


    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    }


    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <SunTheme className="dark-mode-btn__icon" />
            <MoonTheme className="dark-mode-btn__icon" />
        </button>
    )
}
