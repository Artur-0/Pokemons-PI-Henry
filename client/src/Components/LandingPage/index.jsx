import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Landing } from "./styled-Lp";
// import Sound from "../Sound";
import pokemonSound from "../../Assets/Pokemon_Theme_Song.mp3";
import { MuteBtn } from "../Sound/styledSound";
import useSound from "use-sound";
import mute from "../../Assets/mute.png";
import speaker from "../../Assets/speaker.png";

function LandingPage() {
  const [play, { pause }] = useSound(pokemonSound);
  const [muted, setMuted] = useState(true);
  const onClickHandler = () => {
    muted ? play() : pause();
    setMuted(!muted);
  };
  useEffect(() => {
    alert(
      "not responsive YET, set your browser with 133% zoom for a better experience"
    );
  }, []);
  return (
    <Landing>
      <MuteBtn onClick={onClickHandler}>
        {muted ? (
          <img src={mute} alt="muted" />
        ) : (
          <img src={speaker} alt="sound" />
        )}
      </MuteBtn>
      <h1>Welcome!</h1>
      <p>
        Pikachu, Bulbasaur, Charmander and all kinds of pokemon are waiting for
        you...
      </p>
      <Link to="/pokemon">
        <Button onClick={() => pause()}>Let's go!</Button>
      </Link>
    </Landing>
  );
}

export default LandingPage;
