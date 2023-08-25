import React from 'react'
import("./bannerstyles.css");

function Banner() {
    return (
        <div>
            <header
                className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg")`,
                    backgroundPosition: "center center",
                }}
            >
            </header>

            <header
                className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://wallpaperaccess.com/full/712410.jpg")`,
                    backgroundPosition: "center center",
                }}
            >
            </header>
        </div>

    )
}

export default Banner