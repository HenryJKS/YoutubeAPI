import React from "react";

const VideoDetail = ({video}) => {
    // quando o video não estiver carregado, mostrar a mensagem de loading
    if (!video) {
        return <div>Loading...</div>
    }

    // chamando o id do video
    const videoId = video.id.videoId;
    // concatenando o http do youtube com o ID do video para achar o video
    const url = `https://www.youtube.com/embed/${videoId}`;
    const videoTitle = video.snippet.title;
    const videoDescription = video.snippet.description;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="details">
                <div>{videoTitle}</div>
                <div>{videoDescription}</div>
            </div>
        </div> 
    );
};

export default VideoDetail;