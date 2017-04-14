import React from 'react';
import {ListGroup, Button, Glyphicon} from 'react-bootstrap';
import LocationModal from './location-modal';
import ReactDOM from 'react-dom';
import  '../css/btn-style.css'

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
            <ListGroup id="list_group">

                {
                    addresses.map(item=>{
                    return<div className="row list_item">
                        {item.properties.label}

                            <Button
                                bsStyle="success"
                                bsSize="small"
                                id="show-btn"
                                onClick={() => {this.showModal(item.geometry.coordinates)}}>
                                Maps
                                <Glyphicon glyph="map-marker"/>
                            </Button>
                        </div>;
                })}
            </ListGroup>

        );
    }
}