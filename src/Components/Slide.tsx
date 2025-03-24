import React from 'react'
// import logo from '../images/logo.jpg'

export default function Slide(props: any) {
    return (
        <section {...props}>
            {props.children}
            {/* <img src={logo} alt="Adico" id="adico-logo" /> */}
        </section>
    )
}
