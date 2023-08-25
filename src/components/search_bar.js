import React, { Component } from "react"



class SearchBar extends Component {
    // o construtor é chamado automaticamente sempre que uma instância da classe é criada
    // props é um objeto que tem todas as propriedades do componente
    constructor(props) {
        // o super chama o construtor da classe pai
        super(props);

        this.state = { term: ''};
    }

    render() {
        // pegando o evento de mudança do input
        // a arrow function é uma forma de escrever uma função
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;