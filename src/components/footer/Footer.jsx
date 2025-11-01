import styles from "./footer.module.css";
import SocialMediaNavBar from "../socialMediaNavBar/SocialMediaNavBar";

export default function Footer() {
	return (
		<section
			className={styles.footer}
			tabIndex={0}>
			<div className={styles.footer_wrapper}>
				<SocialMediaNavBar props={{ styles }} />
				<span className={styles.txt}>
					Los Angeles, CA
				</span>
				<span className={styles.txt}>
					Copyright © 2025
				</span>
			</div>
		</section>
	);
}
