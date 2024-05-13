import styles from "./videoSection.module.css";
import reel_720 from "../../assets/videos/reels/tower_reel_720.webm";
import demo_720 from "../../assets/videos/demos/short_demo_720.webm";
import demo_1080 from "../../assets/videos/demos/short_demo_1080.webm";
import poster from "../../assets/imgs/farms/tower_closeup_poster.webp";

import { useInView } from "react-intersection-observer";

export default function VideoSection() {
	const txt = useInView();

	return (
		<section
			className={styles.video_section}
			tabIndex={0}>
			<div className={styles.txt_wrapper}>
				<p
					ref={txt.ref}
					className={styles.txt}>
					480,000 plants per year, in less space than a tennis court
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
