import style from './page.module.css';
const Section = ({isDarkMode}) => {
    return (
        <div  className={isDarkMode ? style.darkMode : style.lightMode}>
            <h1>Section</h1>
        </div>
    );
}
export default Section;