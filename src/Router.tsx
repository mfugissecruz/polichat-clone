import { useMediaQuery } from "react-responsive";
import { Routes, Route, Navigate } from "react-router-dom"
import { Dashboard } from "./components/Dashboard"
import { Chat } from "./components/Chat";

export function Router(){
    const isMobile = useMediaQuery({query: '(max-width: 480px)'});
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
    return (
        <Routes>
            <Route element={ <Dashboard /> } path="/"/>
            <Route path="/chat" element={ isMobile || isTablet ? <Chat /> : <Dashboard /> } />

        </Routes>
    )
}