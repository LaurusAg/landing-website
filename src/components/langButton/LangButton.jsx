import styles from "./langButton.module.css";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
export default function LangButton({
	lang,
	handleLang,
	introSectionVisibility,
}) {
	return (
		<>
			<Helmet>
				<html lang={lang ? "en" : "es"}></html>
			</Helmet>
			<button
				className={`${styles.lang_btn} ${
					introSectionVisibility ? styles.hide : styles.show
				}`}
				tabIndex={0}
				onClick={handleLang}>
				<p className={styles.lang}>{lang ? "EN" : "ES"}</p>
			</button>
		</>
	);
}

LangButton.propTypes = {
	lang: PropTypes.bool,
	handleLang: PropTypes.func,
	introSectionVisibility: PropTypes.bool,
};
