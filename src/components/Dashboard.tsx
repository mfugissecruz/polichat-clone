import { useMediaQuery } from "react-responsive";
import { Desktop } from "./desktop";
import { Mobile } from "./mobile";
import { Tablet } from "./tablet";

export function Dashboard(){
    const isMobile = useMediaQuery({query: '(max-width: 480px)'});
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
    return (
        <div className="w-screen h-screen bg-white dark:bg-[#232c3d]">
           { isMobile ? <Mobile/> : isTablet ? <Tablet /> : <Desktop /> }
        </div>
    )
}