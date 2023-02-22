import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Slider from './Slider'
import Articles from './Articles'

export default class Blog extends Component {
    render() {
        return (
            <div id="home">
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        <Articles />
                    </div>
                    <Sidebar
                        blog="true"
                    />
                </div>
            </div>
        )
    }
}


