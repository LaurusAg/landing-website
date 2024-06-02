import styles from "./home.module.css";
import { useState } from "react";
import LangButton from "../../components/langButton/LangButton";
import IntroSection from "../../components/introSection/IntroSection";
import PurposeSection from "../../components/purposeSection/PurposeSection";
import VideoSection from "../../components/videoSection/VideoSection";
import ConclusionSection from "../../components/conclusionSection/ConclusionSection";
import ContactSection from "../../components/contactSection/ContactSection";
import Footer from "../../components/footer/Footer";

export default function Home() {
	const [lang, setLang] = useState(true);
	const handleLang = () => {
		setLang(!lang);
	};

	const [isIntroSectionVisible, setIsIntroSectionVisible] = useState(true);
	const handleIntroSectionVisibility = (introSectionVisibilityState) => {
		setIsIntroSectionVisible(introSectionVisibilityState);
	};

	return (
		<div className={styles.home_wrapper}>
			<LangButton
				handleLang={handleLang}
				lang={lang}
				introSectionVisibility={isIntroSectionVisible}
			/>

			<IntroSection
				handleIntroSectionVisibility={handleIntroSectionVisibility}
			/>
			<PurposeSection lang={lang} />
			<VideoSection lang={lang} />
			<ConclusionSection lang={lang} />
			<ContactSection lang={lang} />
			<Footer />
		</div>
	);
}
