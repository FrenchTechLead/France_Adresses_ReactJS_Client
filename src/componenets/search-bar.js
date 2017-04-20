import React from 'react';
import ReactDOM from 'react-dom';
import AddressesList from './addresses-list';
import $ from 'jquery';
import "../css/search-bar.css";

export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.select = this.select.bind(this);
    }

    componentDidMount() {
        document.getElementById("search-bar").focus();
    }

    select(){
        document.getElementById("search-bar").select();
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
        return(<input id="search-bar"
                      type="text"
                      onChange={this.handleChange}
                      onClick={e=>{this.select()}}
                      placeholder="Rue, Avenue, ..."/>
              );}
}