import React, { useState } from "react";
import mute from "../../Assets/mute.png";
import speaker from "../../Assets/speaker.png";
import useSound from "use-sound";
import { MuteBtn } from "../Sound/styledSound";
import pokemonSound from "../../Assets/Pokemon_Theme_Song.mp3";

function Sound(stop) {
  const [play, { pause }] = useSound(pokemonSound);
  const [muted, setMuted] = useState(true);
  const onClickHandler = () => {
    setMuted(!muted);
    !muted ? play() : pause();
  };

  return (
    <MuteBtn onClick={onClickHandler}>
      {muted ? (
        <img src={mute} alt="muted" />
      ) : (
        <img src={speaker} alt="muted" />
      )}
    </MuteBtn>
  );
}

export default Sound;
