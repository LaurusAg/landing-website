import styles from "./introSection.module.css";
import { useInView } from "react-intersection-observer";
import logo_primary_mobile from "../../assets/imgs/brand/logo/bgless_logo_primary_mobile.webp";
import logo_primary_desktop from "../../assets/imgs/brand/logo/bgless_logo_primary_desktop.webp";
import logo_secondary_mobile from "../../assets/imgs/brand/logo/bgless_logo_secondary_mobile.webp";
import logo_secondary_desktop from "../../assets/imgs/brand/logo/bgless_logo_secondary_desktop.webp";
import reel_720 from "../../assets/videos/reels/farm_reel_720.webm";
import reel_1080 from "../../assets/videos/reels/farm_reel_1080.webm";
import poster from "../../assets/imgs/farms/towers_poster.webp";

export default function IntroSection() {
	const logo = useInView();

	return (
		<section
			className={styles.hero_section}
			tabIndex={0}>
			<picture className={styles.logo_wrapper}>
				<source
					srcSet={`${logo_secondary_mobile} 1000w, ${logo_secondary_desktop}`}
					media="(prefers-color-scheme: dark)"
				/>
				<img
					ref={logo.ref}
					loading="lazy"
					width="100%"
					height="100%"
					className={styles.logo}
					src={logo_primary_desktop}
					srcSet={`${logo_primary_mobile} 1000w, ${logo_primary_desktop}`}
					alt="logo"
				/>
			</picture>
			<div
				className={`${styles.bg_wrapper} ${
					logo.inView ? styles.show : styles.hide
				}`}>
				<video
					loading="lazy"
					className={`${styles.bg_video}`}
					poster={poster}
					playsInline
					loop
					autoPlay
					muted>
					<source
						src={reel_720}
						media="(orientation: portrait) and (width < 700px)"
						type="video/webm"
					/>
					<source
						src={reel_720}
						media="(orientation: landscape) and (width < 1000px)"
						type="video/webm"
					/>
					<source
						src={reel_1080}
						type="video/webm"
					/>
				</video>
			</div>
		</section>
	);
}
