import React from 'react'
import "./Search.css"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function Search() {
    return (
        <div className="search">
            <div className="search_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
              image="https://i.ytimg.com/vi/xCIrlKvzE3g/maxresdefault.jpg"
              channel="Text Audio Lyrics"
              verified
              subs="2.5M"
              noOfVideos={382}
              description="[song lyrics]
[Indian LoFi]
[Slowed+Reverbed]

 XYZ's channel.

Keep spreading peace/love trough music .
Thankyou for listening:-)
.....
For submission/Removal
kankan@gmail.com"
            />
            <hr />
            <VideoRow
              views="11.4M"
              subs="2.5M"
              description="Aaj jaane ki zid na karo [Slowed+Reverb] - Textaudio Lyrics"
              timestamp="59 sec ago"
              channel="Txt Audio Lyrics"
              title="Aaj jaane ki zid na karo [Slowed+Reverb] - Textaudio Lyrics"
              image="https://i.ytimg.com/vi/0qnE3BKxAj8/mqdefault.jpg"
            />
            <VideoRow
              views="11.4M"
              subs="2.5M"
              description="Aaj jaane ki zid na karo [Slowed+Reverb] - Textaudio Lyrics"
              timestamp="59 sec ago"
              channel="Txt Audio Lyrics"
              title="Hai Junoon [Slowed+Reverb]-KK | Textaudio Lyrics"
              image="https://i.ytimg.com/vi/TDDt4PFBhNk/maxresdefault.jpg"
            />
            <VideoRow
              views="11.4M"
              subs="2.5M"
              description="Aaj jaane ki zid na karo [Slowed+Reverb] - Textaudio Lyrics"
              timestamp="59 sec ago"
              channel="Txt Audio Lyrics"
              title="Aaj jaane ki zid na karo [Slowed+Reverb] - Textaudio Lyrics"
              image="https://i.ytimg.com/vi/0qnE3BKxAj8/mqdefault.jpg"
            />
            <VideoRow
              views="11.4M"
              subs="2.5M"
              description="Aaj jaane ki zid na karo [Slowed+Reverb] - Textaudio Lyrics"
              timestamp="59 sec ago"
              channel="Txt Audio Lyrics"
              title="Hai Junoon [Slowed+Reverb]-KK | Textaudio Lyrics"
              image="https://i.ytimg.com/vi/TDDt4PFBhNk/maxresdefault.jpg"
            />
        </div>
    )
}

export default Search
