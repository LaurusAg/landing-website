import styles from "./conclusionSection.module.css";

import { useInView } from "react-intersection-observer";

import one_arch from "../../assets/imgs/brand/logoArchs/bgless_arch_400.webp";
import two_archs from "../../assets/imgs/brand/logoArchs/bgless_two_archs_400.webp";
import three_archs from "../../assets/imgs/brand/logoArchs/bgless_three_archs_400.webp";
import full_archs from "../../assets/imgs/brand/logoArchs/bgless_full_archs_400.webp";
import bg_img_mobile from "../../assets/imgs/farms/rooftop_shopping_mobile.webp";
import bg_img_desktop from "../../assets/imgs/farms/rooftop_shopping_desktop.webp";
export default function ConclusionSection() {
	const first_card = useInView();
	const second_card = useInView();
	const third_card = useInView();
	const fourth_card = useInView();

	return (
		<section
			className={styles.section}
			tabIndex={0}>
			<div className={styles.container}>
				<div className={styles.articles_wrapper}>
					<article className={styles.article}>
						<div
							ref={first_card.ref}
							className={styles.invisible_ref}></div>
						<div className={styles.frame}>
							<img
								loading="lazy"
								width="100%"
								className={`${styles.one_arch_img} ${
									first_card.inView
										? styles.show
										: styles.hide
								}`}
								src={one_arch}
								alt="logo's small arch"
							/>
						</div>
						<h2 className={styles.title}>
							A{" "}
							<span
								className={`${styles.dark_green} ${styles.strong}`}>
								new paradigm
							</span>{" "}
							in the production and distribution of food
						</h2>
					</article>
					<article className={styles.article}>
						<div
							ref={second_card.ref}
							className={styles.invisible_ref}></div>
						<div className={styles.frame}>
							<img
								loading="lazy"
								width="100%"
								className={`${styles.two_archs_img} ${
									second_card.inView
										? styles.show
										: styles.hide
								}`}
								src={two_archs}
								alt="logo's medium arch"
							/>
						</div>
						<h2 className={styles.title}>
							The{" "}
							<span
								className={`${styles.green} ${styles.strong}`}>
								necessary innovation
							</span>{" "}
							to address environmental issues
						</h2>
					</article>
					<article className={styles.article}>
						<div
							ref={third_card.ref}
							className={styles.invisible_ref}></div>
						<div className={styles.frame}>
							<img
								loading="lazy"
								width="100%"
								className={`${styles.three_archs_img} ${
									third_card.inView
										? styles.show
										: styles.hide
								}`}
								src={three_archs}
								alt="logo's big arch arch"
							/>
						</div>
						<h2 className={styles.title}>
							Close to people, providing{" "}
							<span
								className={`${styles.light_green} ${styles.strong}`}>
								accessible
							</span>
							,{" "}
							<span
								className={`${styles.light_green} ${styles.strong}`}>
								fresh
							</span>{" "}
							and{" "}
							<span
								className={`${styles.light_green} ${styles.strong}`}>
								ready
							</span>{" "}
							to consume food
						</h2>
					</article>
					<article className={styles.article}>
						<div
							ref={fourth_card.ref}
							className={styles.invisible_ref}></div>
						<div className={styles.frame}>
							<img
								loading="lazy"
								width="100%"
								className={`${styles.full_archs_img} ${
									fourth_card.inView
										? styles.show
										: styles.hide
								}`}
								src={full_archs}
								alt="full logo with all it's archs"
							/>
						</div>
						<h2 className={styles.title}>
							Born to set a{" "}
							<span className={styles.strong}>new standard</span>{" "}
							in the food system
						</h2>
					</article>
				</div>
				<div className={styles.stepper}>
					<span
						className={`${styles.step} ${
							first_card.inView ? styles.bright : styles.opaque
						}`}></span>
					<span
						className={`${styles.step} ${
							second_card.inView ? styles.bright : styles.opaque
						}`}></span>
					<span
						className={`${styles.step} ${
							third_card.inView ? styles.bright : styles.opaque
						}`}></span>
					<span
						className={`${styles.step} ${
							fourth_card.inView ? styles.bright : styles.opaque
						}`}></span>
				</div>
			</div>
			<div className={styles.img_wrapper}>
				<img
					loading="lazy"
					width="100%"
					height="100%"
					className={`${styles.bg_img} ${
						first_card.inView ||
						second_card.inView ||
						third_card.inView ||
						fourth_card.inView
							? styles.show
							: styles.hide
					}`}
					src={bg_img_desktop}
					sizes="50vw"
					srcSet={`${bg_img_mobile} 767w, ${bg_img_desktop} `}
					alt="farms in a shopping's rooftop"
				/>
			</div>
		</section>
	);
}
