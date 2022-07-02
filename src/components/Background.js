import React, {useEffect} from 'react'
import './Background.css'
export default function Background({timeLine}) {

    useEffect(() => {

        const background = document.querySelector('.background');
        const logo = document.querySelector('.logo');
        const div1 = document.querySelector('.div1');
        const div2= document.querySelector('.div2');
        const div3 = document.querySelector('.div3');
        const div4 = document.querySelector('.div4');
        const div5 = document.querySelector('.div5');
        const div6 = document.querySelector('.div6');
        const div7 = document.querySelector('.div7');
        const div8 = document.querySelector('.div8');
        const div9 = document.querySelector('.div9');
        const div10 = document.querySelector('.div10');
        timeLine.fromTo(logo, 1, {transform: 'translateX(-200px)', opacity: 0}, {transform: 'translateX(0)', opacity: 1})
        timeLine.fromTo(div1, .5, {width: '100%'}, {width: 0})
        timeLine.fromTo(div2, .5, {width: '100%'}, {width: 0})
        timeLine.fromTo(div3, .5, {width: '100%'}, {width: 0})
        timeLine.fromTo(div4, .5, {width: '100%'}, {width: 0})
        timeLine.to(logo, 1.5, {transform: 'translateX(-200px)', opacity: 0, ease: 'Bounce.easeInOut' })
        timeLine.fromTo(div5, .5, {width: '100%'}, {width: 0})
        timeLine.fromTo(div6, .5, {width: '100%'}, {width: 0})
        timeLine.fromTo(div7, .5, {width: '100%'}, {width: 0})
        timeLine.fromTo(div8, .5, {width: '100%'}, {width: 0})
        timeLine.fromTo(div9, .5, {width: '100%'}, {width: 0})
        timeLine.to(background, .1, {display: 'none'})

    }, []);

    return (
        <div className='background'>
            <div className='div1'></div>
            <div className='div2'></div>
            <div className='div3'></div>
            <div className='div4'></div>
            <div className='div5'><h1 className='logo'>.HI THERE!</h1></div>
            <div className='div6'></div>
            <div className='div7'></div>
            <div className='div8'></div>
            <div className='div9'></div>
        </div>
    )
}
