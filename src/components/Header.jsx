import { NavLink } from "react-router-dom"
import Button from "./Button"

const Header = () => {

    return (
        <header className="bg-slate-400 md:py-5">
            <ul className="
                md:flex
                md:justify-between
                md:items-center
                md:w-80
                md:p-4
                md:gap-3
                ">
                <li className="flex-1">
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? 'bg-rose-800 py-2' : 'bg-slate-500 py-2'
                        }}
                        to="/" >
                        <Button name={"Home"} className={"w-full"}/>
                    </NavLink>
                </li>
                <li className="flex-1">
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? 'bg-rose-800 py-2' : 'bg-slate-500 py-2'
                        }}
                        to="/todos">
                        <Button name={"Todos"} className={"w-full"}/>
                    </NavLink>
                </li>
                
            </ul>
        </header >
    )
}

export default Header