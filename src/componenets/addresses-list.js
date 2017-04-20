import React from 'react';
import LocationModal from './location-modal';
import ReactDOM from 'react-dom';
import  '../css/addresses-list.css';
import compass from '../img/compass.svg';

export default class AddressesList extends React.Component{

    constructor(props){
        super(props);
        this.state={keyWord:props.keyWord, addresses:props.addresses}
        this.showModal = this.showModal.bind(this);
    }

    toggleModal(){
        this.setState({modal_visibility:! this.state.showModal});
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.keyWord !== this.state.keyWord){
            this.setState({ keyWord: nextProps.keyWord, addresses:nextProps.addresses });
        }
    }

    showModal(cordinates){
        ReactDOM.render(<LocationModal cordinates={cordinates} showModal={true} />,
            document.getElementById('modal'));
    }


    render(){
        var addresses = this.state.addresses;
        return(
            <div>
                {
                    addresses.map(item=>{
                    return<div className="row list_item">
                    <button
                        id="show-btn"
                        onClick={() => {this.showModal(item.geometry.coordinates)}}>
                        <img src={compass}  alt="logo" className="compass"/>
                    </button>

                        {item.properties.label}
                    </div>;
                })}
            </div>

        );
    }
}
