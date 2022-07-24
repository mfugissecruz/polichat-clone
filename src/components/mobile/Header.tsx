import { useTheme } from "../../hooks/useTheme"

import logo from "../../assets/logo-light.png"
import logoDark from "../../assets/logo-dark.png"
import { List } from "phosphor-react"
import { SwitchToggle } from "../Switch"

export function Header() {

    const { isDark } = useTheme()

    return (
        <header className="p-4 h-16 border-b-2 border-gray-300 dark:border-b-2 dark:border-[#454f66]">
            <div className="h-full flex items-center justify-between">
                { isDark? <img src={ logo } alt="Logo da Poli" /> : <img src={logoDark} alt="Logo da Poli" />}
                <div className="flex items-center gap-2">
                    <SwitchToggle />
                    <button>
                        <List size={24} color="#14bbc1" />
                    </button>
                </div>
            </div>
        </header>
    )
}