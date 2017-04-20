import React from 'react';
import ReactDOM from 'react-dom';
import AddressesList from './addresses-list';
import $ from 'jquery';
import "../css/search-bar.css";

export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        document.getElementById("search-bar").focus();
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
        return(<div className="row search-bar-container">
                    <input id="search-bar" type="text" onChange={this.handleChange} placeholder="Ex: 1 rue de la paix"/>
              </div>);}
}
