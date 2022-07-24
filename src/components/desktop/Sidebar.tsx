import { House, ChatCircleText, ChartPie, Buildings, GearSix, CurrencyDollarSimple, Wrench, Question, CaretDoubleRight } from "phosphor-react";
import logo from '../../assets/logo.png';

export function Sidebar() {
    return (
        <div className="h-screen w-20">
            <aside className="w-20 h-full bg-gray-100 border-gray-300 border-r dark:border-r-2 dark:bg-[#232c3d] dark:border-[#454f66]" aria-label="Sidebar">
            <div className="h-[67px] w-20 flex justify-center border-b border-gray-300 dark:border-b-2 dark:border-[#454f66]">
                <img src={logo} alt="Polichat logo" className="m-4" />
            </div>

            <div className="text-zinc-900 h-4/6 border-b border-gray-300 dark:border-b-2 dark:border-[#454f66] dark:text-gray-200">
                <ul className="flex flex-col items-center">
                    <li className="w-full">
                        <a href="#" className="h-16 flex justify-center items-center focus:bg-gray-50 focus:border-l-4 focus:border-yellow-500 focus:text-yellow-500 dark:focus:bg-[#2f3a4e] dark:focus:border-l-4 dark:focus:border-[#1e94a0] dark:focus:text-[#1e94a0]">
                            <House size={28}/>
                        </a>
                    </li>
                    <li className="w-full">
                        <a href="#" className="h-16 flex justify-center items-center focus:bg-gray-50 focus:border-l-4 focus:border-yellow-500 focus:text-yellow-500 dark:focus:bg-[#2f3a4e] dark:focus:border-l-4 dark:focus:border-[#1e94a0] dark:focus:text-[#1e94a0]">
                            <ChatCircleText size={28}/>
                        </a>
                    </li>
                    <li className="w-full">
                        <a href="#" className="h-16 flex justify-center items-center focus:bg-gray-50 focus:border-l-4 focus:border-yellow-500 focus:text-yellow-500 dark:focus:bg-[#2f3a4e] dark:focus:border-l-4 dark:focus:border-[#1e94a0] dark:focus:text-[#1e94a0]">
                            <ChartPie size={28} />
                        </a>
                    </li>
                    <li className="w-full">
                        <a href="#" className="h-16 flex justify-center items-center focus:bg-gray-50 focus:border-l-4 focus:border-yellow-500 focus:text-yellow-500 dark:focus:bg-[#2f3a4e] dark:focus:border-l-4 dark:focus:border-[#1e94a0] dark:focus:text-[#1e94a0]">
                            <Buildings size={28} />
                        </a>
                    </li>
                    <li className="w-full">
                        <a href="#" className="h-16 flex justify-center items-center focus:bg-gray-50 focus:border-l-4 focus:border-yellow-500 focus:text-yellow-500 dark:focus:bg-[#2f3a4e] dark:focus:border-l-4 dark:focus:border-[#1e94a0] dark:focus:text-[#1e94a0]">
                            <GearSix size={28} />
                        </a>
                    </li>
                    <li className="w-full">
                        <a href="#" className="h-16 flex justify-center items-center focus:bg-gray-50 focus:border-l-4 focus:border-yellow-500 focus:text-yellow-500 dark:focus:bg-[#2f3a4e] dark:focus:border-l-4 dark:focus:border-[#1e94a0] dark:focus:text-[#1e94a0]">
                            <CurrencyDollarSimple size={28} />
                        </a>
                    </li>
                    <li className="w-full">
                        <a href="#" className="h-16 flex justify-center items-center focus:bg-gray-50 focus:border-l-4 focus:border-yellow-500 focus:text-yellow-500 dark:focus:bg-[#2f3a4e] dark:focus:border-l-4 dark:focus:border-[#1e94a0] dark:focus:text-[#1e94a0]">
                            <Wrench size={28} />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="w-full text-zinc-900 dark:text-gray-200">
                <ul className="list-none flex flex-col items-center justify-center">
                    <li className="w-full">
                        <a href="#" className="h-16 flex justify-center items-center"><Question size={28} /></a>
                    </li>
                    <li className="w-full h-16 flex justify-center items-center">
                        <span className="bg-[#ff6581] rounded-full w-10 h-10 flex items-center justify-center">
                            MC
                        </span>
                    </li>
                    <li className="w-full h-16 flex justify-center items-center">
                        <a href="#"><CaretDoubleRight size={20} /></a>
                    </li>

                </ul>
                <div className="w-full h-16 text-center text-gray-400">
                    <span className="block text-[10px]">Versão</span>
                    <span className="text-[12px]">v0.15.182</span>
                </div>
            </div>
        </aside>
    </div>
    )
}