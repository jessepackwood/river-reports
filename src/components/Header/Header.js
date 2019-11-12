import React, { Component } from 'react'
import './Header.scss'

export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1 id='header-title'>Colorado River Reports</h1>
            </div>
        )
    }
}

export default Header
