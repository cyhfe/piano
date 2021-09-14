import styles from "./app.module.css";
import Logo from "./components/logo/logo";
import Footer from "./components/footer/footer";
import { useEffect, useRef } from "react";
import SoundFont from "soundfont-player";
import MidiPlayer from "midi-player-js";

const App = () => {
  const audio = useRef(new AudioContext());
  const player = useRef(
    new MidiPlayer.Player(function (event: any) {
      console.log(event);
      if (event.name === "Note on") {
        if (event.velocity === 0) {
          // instrument.current.stop();
          return;
        }
        instrument.current.play(event.noteName, audio.current.currentTime);
      } else if (event.name === "Note off") {
        // instrument.current.stop();
      }
    })
  );
  const instrument = useRef<any>(null);
  const load = async () => {
    instrument.current = await SoundFont.instrument(
      audio.current,
      "acoustic_grand_piano"
    );
  };
  const handlePlay = async () => {
    const midi = await fetch("/2.mid").then((response) =>
      response.arrayBuffer()
    );
    if (player.current) {
      player.current.loadArrayBuffer(midi);
      player.current.play();
    }
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <div className={styles.app}>
      <Logo />
      <div className={styles.content}>
        context
        <button onClick={handlePlay}>play music</button>
      </div>
      <Footer />
    </div>
  );
};

export default App;
