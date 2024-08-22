import style from './page.module.css';
const Footer = ({isDarkMode}) => {
    return (
        <footer className={isDarkMode ? style.darkMode : style.lightMode}>
            <p>Footer</p>
        </footer>
    );
}

export default Footer;