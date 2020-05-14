import React, { useState } from "react";
import classNames from "classnames";
import VideoPlayer from "./VideoPlayer";
import "./MonsterLessons.scss";

const MICAELA_VIDEOS = [
  "https://vimeo.com/416842111",
  "https://vimeo.com/417305543",
];

const CHLOE_VIDEOS = [
  "https://vimeo.com/417046038",
  "https://vimeo.com/417069718",
  "https://vimeo.com/417050011",
];

const MonsterLessons = () => {
  const [shouldShowMicaelaBio, setShouldShowMicaelaBio] = useState(false);
  const [shouldShowChloeBio, setShouldShowChloeBio] = useState(false);

  const handleClick = (action: string) => {
    switch (action) {
      case "micaela_bio":
        setShouldShowMicaelaBio(true);
        break;
      case "chloe_bio":
        setShouldShowChloeBio(true);
        break;
      case "micaela_lessons":
        setShouldShowMicaelaBio(false);
        break;
      case "chloe_lessons":
        setShouldShowChloeBio(false);
        break;
      default:
        console.log("why is there nothing here?");
        break;
    }
  };

  return (
    <div className='MonsterLessons'>
      <div className='MonsterLessons__person'>
        <h1>Micaela Tobin</h1>
        <div className='MonsterLessons__nav'>
          <p
            className={classNames({ active: !shouldShowMicaelaBio })}
            onClick={() => handleClick("micaela_lessons")}
          >
            lessons
          </p>
          <p
            className={classNames({ active: shouldShowMicaelaBio })}
            onClick={() => handleClick("micaela_bio")}
          >
            bio
          </p>
        </div>
        {!shouldShowMicaelaBio ? (
          MICAELA_VIDEOS.map((url: string) => (
            <div className='MonsterLessons__video'>
              <VideoPlayer url={url} />
            </div>
          ))
        ) : (
          <div className='bio'>
            <p>
              Micaela Tobin is a soprano, sound artist, and teacher based in Los
              Angeles, CA who specializes in experimental voice and contemporary
              opera, composing under the moniker "White Boy Scream." Within this
              project Micaela dissects her operatic and extended vocal
              techniques. She has performed extensively throughout the western
              United States, most notably as a guest with hip-hop
              experimentalists clipping. during their 2017 tour in support of
              The Flaming Lips. Micaela’s last recent full length release,
              “Remains” (Crystalline Morphologies) was listed as one of the top
              10 Noise/Industrial Albums of 2018 by The Wire Magazine. Her
              current album, “BAKUNAWA” (Deathbomb Arc), explores her Filipina
              heritage through pre-colonial mythology.{" "}
            </p>
            <p>
              As an opera singer, Micaela most recently performed a principal
              role in the critically acclaimed experimental opera, Sweet Land
              (comp. Raven Chacon & Du Yun), which made it’s U.S. premiere in
              March 2020. Micaela Tobin is currently on Faculty as a Voice
              Instructor at the California Institute for the Arts and teaches
              privately out of her home in Los Angeles, CA.
            </p>
            <p>
              <a href={"www.micaelatobin.com"}>www.micaelatobin.com</a>
            </p>
          </div>
        )}
      </div>
      <div className='MonsterLessons__person'>
        <h1>Chloe Levaillant</h1>
        <div className='MonsterLessons__nav'>
          <p
            className={classNames({ active: !shouldShowChloeBio })}
            onClick={() => handleClick("chloe_lessons")}
          >
            lessons
          </p>
          <p
            className={classNames({ active: shouldShowChloeBio })}
            onClick={() => handleClick("chloe_bio")}
          >
            bio
          </p>
        </div>
        {!shouldShowChloeBio ? (
          CHLOE_VIDEOS.map((url: string) => (
            <div className='MonsterLessons__video'>
              <VideoPlayer url={url} />
            </div>
          ))
        ) : (
          <div className='bio'>
            <p>bio coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonsterLessons;
