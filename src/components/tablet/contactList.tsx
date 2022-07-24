import { User } from "phosphor-react"
import userImg from "../../assets/user.jpeg"

export function ContactList() {
    return (
        <a href="/chat" className="p-2 cursor-pointer">
            <div className="flex items-center gap-1 ml-12 w-11/12 pb-2 border-b border-gray-300 dark:text-gray-200 dark:border-gray-700 ">
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
    )
}