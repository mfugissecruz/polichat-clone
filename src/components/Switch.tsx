import { Sun, Moon } from "phosphor-react"
import { useTheme } from "../hooks/useTheme"

export function SwitchToggle() {
    const { isDark, setIsDark } = useTheme()

    function handleToggleTheme(){
        setIsDark(!isDark)
    }

    return(
        <div>
            { 
                isDark ? 
                    <Sun size={24} color="#eab308" weight="fill" onClick={ handleToggleTheme } className="cursor-pointer" /> 
                : 
                    <Moon size={24} color="#14bbc1" weight="fill" onClick={ handleToggleTheme } className="cursor-pointer" /> 
            }
        </div>
    )
}