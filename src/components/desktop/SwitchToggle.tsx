import { MoonStars, SunDim } from "phosphor-react"
import { useTheme } from "../../hooks/useTheme"

export function SwitchToggle(){
   const {isDark, setIsDark} = useTheme()

   const handleToggleTheme = () => {
    setIsDark(!isDark)
   }

    return (
        <div className="flex gap-2">
            <a href="#">
                <SunDim size={24} className="text-yellow-500"/>
            </a>
            <div>
                {
                    isDark ? 
                        <div className="flex w-12 h-6 bg-[#31374d] rounded-full" onClick={handleToggleTheme}>
                            <span className="ml-6 w-6 h-6 bg-[#14bbc1] rounded-full"></span>
                        </div>
                       
                    : 
                        // light
                        <div className="flex w-12 h-6 bg-gray-200 rounded-full" onClick={handleToggleTheme}>
                            <span className="w-6 h-6 bg-yellow-500 rounded-full"></span>
                        </div>
                }
            </div>
            <MoonStars size={24} className="text-[#14bbc1]"/>
        </div>
    )
}