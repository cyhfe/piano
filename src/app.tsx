import styles from "./app.module.css";
import Logo from "./components/logo/logo";
import Footer from "./components/footer/footer";
import { useEffect, useRef, useState } from "react";
import SoundFont from "soundfont-player";
import MidiPlayer from "midi-player-js";

const App = () => {
  const [player, setPlayer] = useState<any>(null);
  const [instrument, setIntrument] = useState<any>(null);
  const audio = useRef(new AudioContext());
  const load = async () => {
    const instrument = await SoundFont.instrument(
      audio.current,
      "acoustic_grand_piano"
    );
    setIntrument(instrument);

    const player = new MidiPlayer.Player(function (event: any) {
      console.log(event)
    });
    setPlayer(player)
  };
  const handlePlay = async () => {
    instrument.play("C4");
    const midi = await fetch("/pearls.mid").then((response) => response.arrayBuffer());
    player.loadArrayBuffer(midi);
    player.play()
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <div className={styles.app}>
      <Logo />
      <div className={styles.content}>
        context
        <img src="/logo192.png" alt="" />
        <button onClick={handlePlay}>play instrument</button>
        <button onClick={handlePlay}>play music</button>
      </div>
      <Footer />
    </div>
  );
};

export default App;
