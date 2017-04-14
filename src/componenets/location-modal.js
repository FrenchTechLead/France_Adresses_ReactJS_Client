import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import Horizontal from './horizontal-slider';
import $ from 'jquery';
export default class LocationModal extends React.Component{


    constructor(props){
        super(props);
        this.state={cordinates: props.cordinates, showModal:props.showModal}
        this.toggleModal = this.toggleModal.bind(this);
        $('.modal .modal-body').css('overflow-y', 'auto');

    }

    toggleModal(){
        this.setState({showModal:! this.state.showModal});
    }

    getInitialState() {
        return { showModal: false };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ cordinates: nextProps.cordinates, showModal:nextProps.showModal });
    }

    render(){
        var maxHeight = $(window).height() * 0.7;
        var maxWidth = $(window).width() * 0.7;
        var coorString =this.state.cordinates[1]+","+this.state.cordinates[0];
        var link_head = "https://maps.googleapis.com/maps/api/staticmap?center="+
            coorString+
            "&size="+Math.floor(maxWidth)+"x"+Math.floor(maxHeight)+"&zoom=";
        var link_tail = "&markers=color:red%7Clabel:C%7C" + coorString;
        var link = link_head+"17"+link_tail;

            return(
                <Modal
                    id="my-modal"
                    show={this.state.showModal}
                    onHide={this.toggleModal}
                    bsSize="large">
                    <Modal.Header closeButton>
                        <Modal.Title id="modal-header" className="text-center">
                            Google Maps
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Horizontal link_head={link_head} link_tail={link_tail}/>
                        <img src={link} id="map"  alt="Chargement..." width="100%" height={maxHeight}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{this.toggleModal()}}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            );
    }
}




