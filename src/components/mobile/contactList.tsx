import { User } from "phosphor-react"
import userImg from "../../assets/user.jpeg"

export function ContactList() {
    return (
        <div>

            <a href="/chat" className="p-2 cursor-pointer">
                <div className="flex items-center gap-1 w-full pb-2 border-b border-gray-300 dark:text-gray-200 dark:border-gray-700 ">
                    <div className="w-[58px] h-[58px] m-1 rounded-full overflow-hidden bg-cyan-800 flex">
                        <img src={userImg} alt="user-name" className="object-cover"/>
                    </div>
                    <div className="w-9/12 h-full pl-2">
                        <div className="flex justify-between items-center">
                            <span className="text-md font-bold font">Lionel Messi</span>
                            <span className="text-sm">Há 23 horas</span>
                        </div>
                        <div>
                            <span className="text-sm">Lorem ipsum dolor sit amet</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={12} />
                            <span className="text-xs">John Doe</span>
                        </div>
                    </div>
                </div>
            </a>

            <a href="#hat" className="p-2 cursor-pointer">
                <div className="flex items-center gap-1 w-full pb-2 border-b border-gray-300 dark:text-gray-200 dark:border-gray-700 ">
                    <div className="w-[58px] h-[58px] m-1 rounded-full overflow-hidden bg-cyan-800 flex">
                    <img src="https://images.unsplash.com/photo-1658203620198-4e5b41557aaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1054&q=80" alt="user-name" className="object-cover"/>
                    </div>
                    <div className="w-9/12 h-full pl-2">
                        <div className="flex justify-between items-center">
                            <span className="text-md font-bold font">Lili Santos</span>
                            <span className="text-sm">Há 2 horas</span>
                        </div>
                        <div>
                            <span className="text-sm">Lorem ipsum dolor sit amet</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={12} />
                            <span className="text-xs">John Doe</span>
                        </div>
                    </div>
                </div>
            </a>

            <a href="#chat" className="p-2 cursor-pointer">
                <div className="flex items-center gap-1 w-full pb-2 border-b border-gray-300 dark:text-gray-200 dark:border-gray-700 ">
                    <div className="w-[58px] h-[58px] m-1 rounded-full overflow-hidden bg-cyan-800 flex">
                        <img src="https://images.unsplash.com/photo-1581182830442-e8bc7babbf15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="user-name" className="object-cover"/>
                    </div>
                    <div className="w-9/12 h-full pl-2">
                        <div className="flex justify-between items-center">
                            <span className="text-md font-bold font">Lorrany</span>
                            <span className="text-sm">Há 1 dia</span>
                        </div>
                        <div>
                            <span className="text-sm">Lorem ipsum dolor sit amet</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={12} />
                            <span className="text-xs">John Doe</span>
                        </div>
                    </div>
                </div>
            </a>

            <a href="#chat" className="p-2 cursor-pointer">
                <div className="flex items-center gap-1 w-full pb-2 border-b border-gray-300 dark:text-gray-200 dark:border-gray-700 ">
                    <div className="w-[58px] h-[58px] m-1 rounded-full overflow-hidden bg-cyan-800 flex">
                        <img src="https://images.unsplash.com/photo-1635039156751-6141f581b06a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80" alt="user-name" className="object-cover"/>
                    </div>
                    <div className="w-9/12 h-full pl-2">
                        <div className="flex justify-between items-center">
                            <span className="text-md font-bold font">Beatriz</span>
                            <span className="text-sm">Há 11 minutos</span>
                        </div>
                        <div>
                            <span className="text-sm">Lorem ipsum dolor sit amet</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={12} />
                            <span className="text-xs">John Doe</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}