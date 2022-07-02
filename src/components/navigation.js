import React, {useState, useEffect} from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import {Link as Anchor} from 'react-scroll'

import './navigation.css'

export default function Navigation({navScroll, timeLine}) {

    const [menu, setMenu] = useState(false)

    useEffect(() => {
        timeLine.fromTo('.menuList', .5, {translateX: '-20px', opacity: 0}, {translateX: '0', opacity: 1})
    }, [])

    return (
        <nav className={navScroll ? 'activeScroll' : ''}>
            <div className="max">
                <aside>
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
