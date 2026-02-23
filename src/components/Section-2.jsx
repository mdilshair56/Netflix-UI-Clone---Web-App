import React from "react";
import VideoComponent from "./video";
import "./styles/styles.css";
import "./styles/Responsiveness.css";

function Section2() {
    return(
<div className="section-2">
<h2 className="sect2-heading">Enjoy on your TV</h2>
<p className="section2-content">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
<div className="video-section">
<img src="/images/tv.png" alt="TV" class="tv-img" />
<VideoComponent />
</div>
</div>
    );
}
export default Section2;