import styles from "./app.module.css";
import Logo from "./components/logo/logo";
import Footer from "./components/footer/footer";
const App = () => {
  return (
    <div className={styles.app}>
      <Logo />
      <div className={styles.content}>context</div>
      <Footer />
    </div>
  );
};

export default App;
