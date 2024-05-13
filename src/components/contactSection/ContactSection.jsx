import styles from "./contactSection.module.css";
import { PopupButton } from "react-calendly";
import bg_img_mobile from "../../assets/imgs/farms/seedling_tray_mobile.webp";
import bg_img_tablet from "../../assets/imgs/farms/seedling_tray_tablet.webp";
import bg_img_desktop from "../../assets/imgs/farms/seedling_tray_desktop.webp";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
	const txt = useInView();
	return (
		<section
			className={styles.contact_section}
			tabIndex={0}>
			<div className={styles.card_wrapper}>
				<article className={styles.contact_card}>
					<h1 className={styles.card_header}>
						{"Let's pioneer the future of agriculture, together"}
					</h1>
					<p
						ref={txt.ref}
						className={styles.card_text}>
						Join us today and create a future where fresh food is
						accessible to all, regardless of where they live or how
						much they make.
					</p>

					<PopupButton
						className={styles.calendly_btn}
						url="https://calendly.com/nicobisso/intro-call"
						rootElement={document.getElementById("root")}
						text="Schedule a call!"
					/>
				</article>
			</div>
			<div className={styles.img_wrapper}>
				<img
					loading="lazy"
					width="100%"
					height="100%"
					className={`${styles.bg_img} ${
						txt.inView ? styles.show : styles.hide
					}`}
					src={bg_img_desktop}
					sizes="50vw"
					srcSet={`${bg_img_mobile} 768w, ${bg_img_tablet} 1024w, ${bg_img_desktop} `}
					alt="a farm's seedling tray"
				/>
			</div>
		</section>
	);
}
