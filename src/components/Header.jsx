import { GoSun } from "react-icons/go";
import { GoMoon } from "react-icons/go";
import { useState } from "react";

if (localStorage.theme === 'dark' 
    || (!('theme' in localStorage) 
    && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

const Header = () => {
    const [theme, setTheme] = useState(localStorage.theme);

    function handleThemeChange() {
        const html = document.documentElement;
        html.classList.toggle('dark');
        if (html.classList.contains('dark')){
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
        setTheme(localStorage.theme);
    }

    return  (
        <header 
        className="flex justify-between 
        max-w-[1200px] sm:px-20 px-4 pt-8 pb-14 my-0 mx-auto"
        >
            <div 
            className="sm:text-5xl text-3xl text-center dark:text-white"
            >
                <span className="text-green-accent">#React</span> <br/> Тест</div>
            <button 
            onClick={handleThemeChange} 
            className="w-28 h-10 rounded-full
            transition-colors duration-300 ease-in-out 
            text-white dark:text-black 
            bg-gray-500 dark:bg-white"
            > 
                <div className="w-10 transition-transform dark:translate-x-16">
                {theme==='dark'? <GoSun className="size-[32px] mx-1"/> : <GoMoon className="size-[32px] mx-1"/>}
                </div> 
            </button>
        </header>
    )
}

export default Header;