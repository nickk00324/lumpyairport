import React, { useState } from "react";
import classNames from "classnames";
import VideoPlayer from "./VideoPlayer";
import "./MonsterLessons.scss";

const MICAELA_VIDEOS: { [key: string]: string } = {
  "Vocal Exercises 1": "https://vimeo.com/416842111",
  "Vocal Exercises 2": "https://vimeo.com/417305543",
};

const CHLOE_VIDEOS: { [key: string]: string } = {
  "Breathing Exercises": "https://vimeo.com/417046038",
  "Vocal Warm-ups": "https://vimeo.com/417069718",
  "Vocal Exercises 1": "https://vimeo.com/417050011",
  "Lesson 2 Part 1: Easy Improvisation": "https://vimeo.com/418267891",
  "Lesson 2 Part 2: Voice as an Instrument": "https://vimeo.com/418603257",
};

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
          Object.keys(MICAELA_VIDEOS).map((key: string) => (
            <div className='MonsterLessons__video'>
              <VideoPlayer key={key} url={MICAELA_VIDEOS[key]} title={key} />
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
          Object.keys(CHLOE_VIDEOS).map((key: string) => (
            <div className='MonsterLessons__video'>
              <VideoPlayer key={key} url={CHLOE_VIDEOS[key]} title={key} />
            </div>
          ))
        ) : (
          <div className='bio'>
            <p>
              Chloe Levaillant is a French-British singer-songwriter, vocalist,
              improviser and composer. Born in London, she spent the early part
              of her childhood in England before moving to France with her
              family. She got the opportunity to study classical singing at the
              Conservatoire Darius Milhaud in Aix en Provence. She then did her
              BA in Contemporary Performance Practice at the Royal Conservatoire
              Scotland where she graduated in 2017. She did her MFA in VoiceArts
              at California Institute of the Arts where she graduated in 2019.
              Chloe is currently working on producing her third album and
              teaches voice lessons engaging with a variety of vocal styles.
              <p>
                Email{" "}
                <a href={"mailto:chloelevaillantmusic@gmail.com"}>
                  chloelevaillantmusic@gmail.com
                </a>{" "}
                for one on one Skype lessons.
              </p>
              <p>
                <a href='https://chloelevaillant.bandcamp.com/releases'>
                  chloelevaillant.bandcamp.com/releases
                </a>
              </p>
              <p>
                <a href='https://chloelevaillant.com/'>chloelevaillant.com</a>
              </p>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonsterLessons;
