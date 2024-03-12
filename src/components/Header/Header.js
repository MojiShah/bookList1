import React, { Component } from 'react';
import '../../styles/bootstrap.min.css';
import { BiBookReader } from 'react-icons/bi';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <h1 className='display4 text-center'>
                <BiBookReader className='text-warning'/>
                Moji ReactJs <span className='text-warning'>Book</span>List Project
            </h1>
        )
    }
}
