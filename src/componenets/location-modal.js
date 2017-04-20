import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import Horizontal from './horizontal-slider';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        var static_link = "https://maps.googleapis.com/maps/api/staticmap?center="+
                            coorString+"&markers=color:blue%7Clabel:A%7C" + coorString+
                            "&size="+Math.floor(maxWidth)+"x"+Math.floor(maxHeight)+
                            "&key=AIzaSyDCL2DyuEdSb0QsqQ5gDpyFyZpBm6JaJrU"+"&zoom=";
        var link = static_link+"17";

            return(
                <Modal
                    id="my-modal"
                    show={this.state.showModal}
                    onHide={this.toggleModal}
                    bsSize="large">
                    <Modal.Header style={{'padding':'0px'}}>
                            <Horizontal static_link={static_link} />
                    </Modal.Header>
                    <Modal.Body>

                        <img src={link} id="map"  alt="Chargement..." width="100%" height={maxHeight}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="danger" onClick={()=>{this.toggleModal()}}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            );
    }
}