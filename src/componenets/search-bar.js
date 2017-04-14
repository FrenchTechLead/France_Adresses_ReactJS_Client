import React from 'react';
import ReactDOM from 'react-dom';
import {FormControl,FormGroup,InputGroup} from 'react-bootstrap';
import AddressesList from './addresses-list';
import $ from 'jquery';

export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        $("#address_input").focus();
    }

    handleChange(event) {
        var keyWord = event.target.value;
        var addressAPI = "http://api-adresse.data.gouv.fr/search/?q=";
        if(keyWord.length > 3){
            $.getJSON(addressAPI+keyWord,{
                format: "json"
            }).done(data =>{
                ReactDOM.render(<AddressesList addresses={data.features} keyWord={keyWord} />,
                    document.getElementById('list_container'));
            });
        }else{
            ReactDOM.render(<AddressesList keyWord={""} addresses={[]}/>,
                document.getElementById('list_container'));
        }
    }

    render(){
        return(
            <FormGroup>
                <InputGroup className="input-group-btn">
                    <FormControl id="address_input" type="text" onChange={this.handleChange} placeholder="Ex: 1 rue de la paix" bsSize="large"/>
                </InputGroup>
            </FormGroup>);
    }
}