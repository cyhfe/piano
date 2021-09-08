import styles from "./app.module.css";
import Logo from "./components/logo/logo";
import Footer from "./components/footer/footer";
import Soundfont from "soundfont-player";
import { useEffect, useRef, useState } from "react";
// @ts-ignore: Unreachable code error
import * as loadAudio from "audio-loader";

// // load one file
// load('http://example.net/audio/file.mp3').then(function (buffer) {
//   console.log(buffer) // => <AudioBuffer>
// })

const App = () => {
  const [player, setPlayer] = useState<any>(null);
  const audio = useRef(new AudioContext());
  const load = async () => {
    const player = await Soundfont.instrument(
      audio.current,
      "acoustic_grand_piano"
    );
    setPlayer(player);
  };
  const handlePlay = async () => {
    // load one file
    await loadAudio("/pearls.mid").then(function (buffer: any) {
      console.log(buffer); // => <AudioBuffer>
    });
    player.play("C4");
    // const midi = await Midi.fromUrl('/pearls.mid')
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
        <button onClick={handlePlay}>play</button>
      </div>
      <Footer />
    </div>
  );
};

export default App;
