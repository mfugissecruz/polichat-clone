import { AddressBook, ArrowLeft, DeviceMobile, DotsThreeVertical, Microphone, Paperclip, PaperPlaneTilt, RocketLaunch, Smiley, TextAa } from "phosphor-react"
import { useTheme } from "../hooks/useTheme"
import { SwitchToggle } from "./Switch"

import userImg from "../assets/user.jpeg"
import logoLight from "../assets/logo-light.png"
import logoDark from "../assets/logo-dark.png"

export function Chat(){
    const { isDark } = useTheme()
    return (
        <div>
            <header className="relative z-20 block w-full h-16 px-4 border-b border-b-gray-300 bg-white md:h-20 dark:bg-[#232c3d] dark:border-b-2 dark:border-[#454f66]">
                <div className="h-full flex items-center gap-4 ">
                    <a href="/">
                        <ArrowLeft size={22} weight="bold" className="text-[#14bbc1]"/>
                    </a>
                    <div className="w-full flex items-center justify-between">
                        { isDark ? <img src={logoLight} alt="polichat" /> : <img src={logoDark} alt="polichat" /> }
                    </div>
                    <SwitchToggle />
                    <button>
                        <DotsThreeVertical size={32} className="text-[#14bbc1]"/>
                    </button>
                </div>
            </header>
            <main className="main-chat bg-gray-100 dark:bg-[#232c3d]">
                <div className="h-full overflow-scroll">
                    <div className="w-full h-full relative bg-image p-2">
                        <div className="relative z-10">
                            <div className="absolute left-0 items-end">
                                <div className="flex">
                                    <div className="w-[72px]">
                                        <div className="w-[60px] h-[60px] m-1 rounded-full overflow-hidden flex">
                                            <img src={userImg} alt="user-name" className="object-cover"/>
                                        </div>
                                    </div>
                                    <span className="block bg-[#005c4b] p-3 my-10 text-gray-200 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aperiam nesciunt corporis amet eum dolorum, optio alias minima eius voluptatibus ullam error nostrum officiis quibusdam aliquam doloribus id? Magnam, perferendis!</span>
                                </div>
                            </div>
                            <div className="absolute top-40 right-0  pb-4 mt-36 sm:mt-1">
                                <div className="flex flex-row-reverse gap-2">
                                    <div className="w-[72px]">
                                        <span className="bg-[#ff6581] rounded-full w-[60px] h-[60px] text-xl m-1 flex items-center justify-center">
                                            MC
                                        </span>
                                    </div>
                                    <span className="bg-[#2a3942] p-3 text-gray-200 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aperiam nesciunt corporis amet eum dolorum, optio alias minima eius voluptatibus ullam error nostrum officiis quibusdam aliquam doloribus id? Magnam, perferendis!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="relative z-20 block w-full bg-white">
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
            </footer>
        </div>
    )
}