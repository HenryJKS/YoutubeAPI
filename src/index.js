import _ from 'loadash';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import youtubeApiSearch from "youtube-api-search";
import VideoDetail from "./components/video_detail";

const API_KEY = 'AIzaSyArB22zNLz8Jqh9RRzeT2umt3meYNVuPFQ';

// usamos sempre Classe quando queremos que o componente tenha um conceito de estado
// estado é um objeto que é usado para gravar e reagir a eventos

// Create new component
// some HTML 
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        // retornando os videos da api
        youtubeApiSearch({ key: API_KEY, term: term }, (videos) => {
            // quando a chave e o valor tem o mesmo nome, pode-se usar apenas o nome
            // this.setState({ videos: videos });
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)
        return (
            <div>
                <SearchBar onSearchTerm={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}



// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
