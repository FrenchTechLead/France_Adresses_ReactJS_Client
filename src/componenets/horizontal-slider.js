import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import '../css/modal.css';
import $ from 'jquery';

export default class Horizontal extends Component {

    constructor (props, context) {
        super(props, context)
        this.state = {
            value: 17
        }
    }

    handleChange = (value) => {
        this.setState({
            value: value
        })
    }

    handleChangeComplete = (e) => {
        var link = this.props.static_link + this.state.value;
        $("#map").attr("src",link);
    }

    render () {
        const { value } = this.state
        return (
            <div className='slider center-block'>
                <Slider
                    min={1}
                    max={25}
                    value={value}
                    onChange={this.handleChange}
                    onChangeComplete={this.handleChangeComplete}
                />
            </div>
        )
    }
}