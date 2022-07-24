import { ContactList } from "./contactList";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Tablet(){
    return (
        <div className="flex flex-shrink">
            <Sidebar/>
            <div className="w-full">
                <Header />
                <ContactList/>
            </div>
        </div>
    )
}