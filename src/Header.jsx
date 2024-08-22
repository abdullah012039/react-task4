import style from './page.module.css';

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className={isDarkMode ? style.darkMode : style.lightMode}>
      <h1>My Website</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

export default Header;