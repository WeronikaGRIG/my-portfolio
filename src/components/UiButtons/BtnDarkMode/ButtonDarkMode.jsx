import SunTheme from '../../SunTheme/SunTheme';
import MoonTheme from '../../MoonTheme/MoonTheme';

export default function ButtonDarkMode() {
    return (
        <button className="dark-mode-btn">
            <SunTheme className="dark-mode-btn__icon" />
            <MoonTheme className="dark-mode-btn__icon" />
        </button>
    )
}
