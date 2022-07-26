import { useTheme } from "../../hooks/useTheme"

import logo from "../../assets/logo-light.png"
import logoDark from "../../assets/logo-dark.png"
import { Desktop, DotsThreeOutlineVertical, GlobeHemisphereWest, Graph, Megaphone } from "phosphor-react"
import { SwitchToggle } from "../Switch"

export function Header() {

    const { isDark } = useTheme()

    return (
        <header className="p-4 h-24 border-b-2 dark:border-b-2 dark:border-[#454f66]">
            <div className="p-2 mx-8 h-full flex items-center justify-between ">
                { isDark? <img src={ logo } alt="Logo da Poli" /> : <img src={logoDark} alt="Logo da Poli" />}
                <div>
                    <ul className=" flex gap-4">
                        <li className="flex items-center" >
                            <a href="#">
                                <div className="flex relative">
                                    <div className="text-zinc-900 dark:text-gray-200 w-8">
                                        <Graph size={24} />
                                    </div>
                                    <div className="absolute -top-4 left-4">
                                        <span className="flex items-center justify-center text-xs text-gray-800 font-bold bg-[#ff6581] w-5 h-5 p-[8px] rounded-full">5</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="text-zinc-900 dark:text-gray-200 w-8" >
                            <a href="#"><Desktop size={24} /></a>
                        </li>
                        <li className="text-zinc-900 dark:text-gray-200 w-8" >
                        <a href="#">
                                <div className="flex relative">
                                    <div>
                                        <GlobeHemisphereWest size={24}/>
                                    </div>
                                    <div className="absolute -top-2 left-3 text-[#ff6581]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                                    </svg>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="text-zinc-900 dark:text-gray-200 w-8" >
                            <a href="#"><Megaphone size={24} /></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="bg-yellow-500 rounded-lg text-gray-50 p-3 min-w-fit">
                        Indique e ganhe
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <SwitchToggle />
                    <button>
                        <DotsThreeOutlineVertical size={24} color="#14bbc1" weight="fill" />
                    </button>
                </div>
            </div>
        </header>
    )
}