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
					San Martín, 750, Buenos Aires, CABA 1004
				</span>
				<span className={styles.txt}>
					Copyright © 2024 LA Tech S.A.
				</span>
			</div>
		</section>
	);
}
