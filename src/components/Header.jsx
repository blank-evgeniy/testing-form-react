import { GoSun } from "react-icons/go";
import { GoMoon } from "react-icons/go";
import { useState } from "react";

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
        <header className="sm:px-20 px-4 pt-8 pb-14 flex justify-between">
            <div className="sm:text-5xl text-3xl text-center dark:text-white"><span className="text-green-accent">#React</span> <br/> Тест</div>
            <button onClick={handleThemeChange} className="text-white dark:text-black transition-colors duration-300 ease-in-out bg-gray-500 dark:bg-white w-28 h-10 rounded-full"> <div className="transition-transform dark:translate-x-16 w-10">{theme==='dark'? <GoSun className="size-[32px] mx-1"/> : <GoMoon className="size-[32px] mx-1"/>}</div> </button>
        </header>
    )
}

export default Header;