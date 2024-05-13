import styles from "./app.module.css";
import Home from "./pages/home/Home";

function App() {
	return (
		<>
			<main className={styles.main}>
				<Home />
			</main>
		</>
	);
}

export default App;
