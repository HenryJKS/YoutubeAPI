import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
    // acessando o objeto video e pegando o atributo snippet e depois o atributo thumbnails e depois o atributo default e depois o atributo url
    const imageUrl = video.snippet.thumbnails.default.url;
    const titleVideo = video.snippet.title

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{titleVideo}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem; 