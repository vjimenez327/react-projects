import useLocalStorage from "./useLocalStorage"
import './styles.css'


export default function LightDarkMode(){

  const [theme, setTheme] = useLocalStorage("theme", "dark")

  function handleToggleTheme(){
    setTheme(theme === "light" ? "dark" : "light")
  }

  console.log(theme);

  return(
    <div className="light-dark-mode" data-theme={theme}>
      <div className="mode-container">
        <p> Hello there! </p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}