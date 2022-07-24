import { AddressBook, DeviceMobile, DotsThreeVertical, Microphone, Paperclip, PaperPlaneTilt, RocketLaunch, Smiley, TextAa, User, WhatsappLogo } from "phosphor-react"
import userImg from "../../assets/user.jpeg"

export function Workspace() {

    return (
        <main className="p-4 h-[calc(100%_-_70px)]">
            <div className="h-full flex flex-grow justify-center gap-4">
                <div className="w-[35%] h-full bg-gray-100 rounded-lg p-4 dark:bg-gray-700">
                    <div className="border border-l-4 border-gray-400 border-l-[#14bbc1] rounded-lg cursor-pointer p-4">
                        <a href="#chat">
                            <div className="flex items-center gap-1 w-11/12 pb-2  dark:text-gray-200 dark:border-gray-700 ">
                                <div className="w-[58px] h-[58px] m-1 rounded-full overflow-hidden bg-cyan-800 flex">
                                    <img src={userImg} alt="user-name" className="object-cover"/>
                                </div>
                                <div className="w-9/12 h-full pl-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-md font-bold font">Lionel Messi</span>
                                        <span className="text-sm">Há 23 horas</span>
                                    </div>
                                    <div className="my-1">
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


                </div>
                <div id="chat" className="w-[65%] h-full bg-gray-100 rounded-lg border border-gray-200 relative dark:bg-gray-700 dark:border-gray-500">
                    <div className="relative z-20 flex flex-col h-full">
                        <div className="flex items-center gap-2 bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-500 w-full h-20 rounded-t-lg relative z-20 p-2">
                            <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex">
                                <img src={userImg} alt="user-name" className="object-cover"/>
                            </div>
                            <div className="w-11/12 flex justify-between">
                                <span className="text-[22px] text-white">Lionel Messi</span>
                                <div className="flex items-center">
                                    <span className="bg-[#ff6581] rounded-full w-10 h-10 flex items-center justify-center">
                                        MC
                                    </span>
                                    <DotsThreeVertical size={32} color="#14bbc1" weight="fill"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full bg-chat-image">
                            <div className="w-full h-full px-3">
                                <div className="relative w-full h-ful">
                                    <div className="absolute left-0 items-end ">
                                        <div className="flex">
                                            <span className="block bg-[#005c4b] p-3 my-10 mr-20 text-gray-200 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aperiam nesciunt corporis amet eum dolorum, optio alias minima eius voluptatibus ullam error nostrum officiis quibusdam aliquam doloribus id? Magnam, perferendis!</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-40 right-0  pb-4">
                                        <div className="flex flex-row-reverse gap-2">
                                            <span className="bg-[#2a3942] p-3 ml-20 text-gray-200 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aperiam nesciunt corporis amet eum dolorum, optio alias minima eius voluptatibus ullam error nostrum officiis quibusdam aliquam doloribus id? Magnam, perferendis!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative m-2 ">
                            <div className="absolute bottom-60 w-full h-8 bg-red-500 rounded-lg">
                                <div className="text-center p-1 text-white">
                                    Este atendimento foi encerrado por Lionel Messi
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 block w-full bg-white z-40">
                            <div className="w-full h-full flex flex-col gap-3 items-center pt-3 px-3 bg-gray-100 border-t border-gray-300  dark:border-t-2 dark:border-[#454f66] dark:bg-[#232c3d]">
                                <textarea rows={3} className="p-2.5 w-full h-3/5 text-sm text-zinc-900 bg-gray-100 rounded-lg border border-gray-300 focus:outline-0 resize-none dark:border-2 dark:bg-[#232c3d] dark:text-gray-200 dark:border-[#454f66]" placeholder="Aa"></textarea>
                                <div className="w-11/12 border-t border-gray-300 text-zinc-900 px-3 py-3 flex justify-between dark:border-t-2 dark:text-gray-200 dark:border-[#454f66]">
                                    <div className="flex gap-2 ">
                                        <span className="cursor-pointer"><TextAa size={20} weight="bold"/></span>
                                        <span className="cursor-pointer"><DeviceMobile size={20} /></span>
                                    </div>
                                    <div className="">
                                        <ul className="flex gap-4">
                                            <li>
                                                <button type="button"><AddressBook size={20} /></button>
                                            </li>
                                            <li>
                                                <button><Paperclip size={20} /></button>
                                            </li>
                                            <li>
                                                <button><RocketLaunch size={20} /></button>
                                            </li>
                                            <li>
                                                <button><Smiley size={20} /></button>
                                            </li>
                                            <li>
                                                <button><Microphone size={20} /></button>
                                            </li>
                                            <li>
                                                <button><PaperPlaneTilt size={20} color="#1e94a0"/></button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}