import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Workspace } from './Workspace'

export function Desktop() {
    return (
        <div className="flex flex-shrink">
            <Sidebar />
            <div className='w-full'>
                <Header />
                <Workspace />
            </div>
        </div>
    )
}