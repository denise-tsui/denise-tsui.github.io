import { Navbar } from "./components/Navbar/Navbar"
import { Outlet } from "react-router-dom"



export function Layout() {
    return(
        <><section>
            <Navbar/>
                <main>
                    <Outlet/>
                </main>
        </section></>
    )
}