import style from './page.module.css';
const Body = ({isDarkMode}) => {
    return (
        <div className={isDarkMode ? style.darkMode : style.lightMode}>
            <h1>Body</h1>
            <p>This is the body of the webpage.</p>
        </div>
    );
}

export default Body;