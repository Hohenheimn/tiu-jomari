import React, { useState } from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import '../styles/navigation.css'

export default function Navigation({navScroll}) {

    const [menu, setMenu] = useState(false)


    return (
        <nav className={navScroll ? 'activeScroll' : ''}>
            
            <div className="max">

                <aside >
                    <h1>JOMARI</h1>
                </aside>

                <ul className={`menuList ${ menu ? 'active' : '' }`}>
                    <CustomLinks value="#Home" to="/" setMenu={setMenu} menu={menu}></CustomLinks>
                    <CustomLinks value="#Projects" to="/projects-page"  setMenu={setMenu} menu={menu}></CustomLinks>
                </ul>

                <div className={`menu ${ menu ? 'active' : '' }`} onClick={() => {setMenu(!menu)}}>
                    <div></div>
                </div>

            </div>

        </nav>
    )
}

function CustomLinks({to, value, setMenu, menu}){

    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })

    return(
        <li className='menuItem'>
            <Link to={to}  onClick={() => {setMenu(!menu)}} className={`aMenu ${isActive ? 'active' : ''}`}>
                {value}
            </Link>
        </li>
    )
}
