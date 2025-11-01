import PropTypes from "prop-types";
import styles from "./videoSection.module.css";
import { useInView } from "react-intersection-observer";
import reel_720 from "../../assets/videos/reels/tower_reel_720.webm";
import demo_720 from "../../assets/videos/demos/short_demo_720.webm";
import demo_1080 from "../../assets/videos/demos/short_demo_1080.webm";
import poster from "../../assets/imgs/farms/tower_closeup_poster.webp";

export default function VideoSection({ lang }) {
	const txt = useInView();

	return (
		<section
			className={styles.video_section}
			tabIndex={0}>
			<div className={styles.txt_wrapper}>
				<p
					ref={txt.ref}
					className={styles.txt}>
					{lang
						? "700,000 plants per year, in less space than a tennis court"
						: "700.000 plantas por año, en menos espacio que una cancha de tenis"}
				</p>
			</div>

			<div
				className={`${styles.video_wrapper} ${
					txt.inView ? styles.show : styles.hide
				}`}>
				<video
					loading="lazy"
					className={styles.video}
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
						src={demo_720}
						media="(orientation: landscape) and (width < 1000px)"
						type="video/webm"
					/>
					<source
						src={demo_1080}
						type="video/webm"
					/>
				</video>
			</div>
		</section>
	);
}

VideoSection.propTypes = {
	lang: PropTypes.bool,
};
