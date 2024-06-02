import PropTypes from "prop-types";
import styles from "./purposeSection.module.css";
import { useInView } from "react-intersection-observer";
import card_img_one_mobile from "../../assets/imgs/farms/rooftop_farm_mobile.webp";
import card_img_one_tablet from "../../assets/imgs/farms/rooftop_farm_tablet.webp";
import card_img_one_desktop from "../../assets/imgs/farms/rooftop_farm_desktop.webp";
import card_img_two_mobile from "../../assets/imgs/farmingRobots/farming_robot_mobile.webp";
import card_img_two_tablet from "../../assets/imgs/farmingRobots/farming_robot_tablet.webp";
import card_img_two_desktop from "../../assets/imgs/farmingRobots/farming_robot_desktop.webp";
import card_img_three_mobile from "../../assets/imgs/products/products_mobile.webp";
import card_img_three_tablet from "../../assets/imgs/products/products_tablet.webp";
import card_img_three_desktop from "../../assets/imgs/products/products_desktop.webp";

export default function PurposeSection({ lang }) {
	const cards = [
		{
			observerHook: useInView(),
			img: {
				mobile: card_img_one_mobile,
				tablet: card_img_one_tablet,
				desktop: card_img_one_desktop,
			},
			titleEn: "What we do",
			titleEs: "¿Qué hacemos?",
			txtEn: "We reinvent urban agriculture by providing a sustainable and efficient way to deliver hyper-local, nutritious and affordable food to people in cities.",
			txtEs: "Reinventamos la agricultura urbana ofreciendo una forma sostenible y eficiente de llevar alimentos hiperlocales, nutritivos y asequibles a las personas de las ciudades.",
		},
		{
			observerHook: useInView(),
			img: {
				mobile: card_img_two_mobile,
				tablet: card_img_two_tablet,
				desktop: card_img_two_desktop,
			},
			titleEn: "How we do it",
			titleEs: "¿Cómo lo hacemos?",
			txtEn: "Our automated inflatable farms, designed to utilize idle spaces in cities, enable cultivation regardless of the season and weather.",
			txtEs: "Nuestros invernaderos inflables automatizados, diseñados para aprovechar los espacios ociosos de las ciudades, permiten cultivar independientemente de la estación y los factores climáticos.",
		},
		{
			observerHook: useInView(),
			img: {
				mobile: card_img_three_mobile,
				tablet: card_img_three_tablet,
				desktop: card_img_three_desktop,
			},
			titleEn: "What we achieve",
			titleEs: "¿Qué logramos?",
			txtEn: "Our farms can provide fresh and premium food at affordable prices to anyone, regardless of where they live or how much they earn.",
			txtEs: "Nuestros invernaderos proveen alimentos frescos y de primera calidad a precios asequibles para todos, sin importar dónde vivan o cuánto ganen.",
		},
	];

	return (
		<section
			className={styles.purpose_section}
			tabIndex={0}>
			<div className={styles.filter}></div>
			<div className={styles.frame}>
				{cards?.map((card, index) => (
					<img
						key={index}
						loading="lazy"
						width="100%"
						height="100%"
						className={`${styles.img} ${
							card.observerHook.inView ? styles.show : styles.hide
						}`}
						src={card.img.desktop}
						sizes="(orientation: landscape) 50vw, 100vw"
						srcSet={`${card.img.mobile} 768w, ${card.img.tablet} 1024w, ${card.img.desktop} `}
						alt="rooftop farm"
					/>
				))}
			</div>
			<div className={styles.wrapper}>
				{cards?.map((card, index) => (
					<article
						className={styles.card}
						key={index}>
						<div
							ref={card.observerHook.ref}
							className={styles.invisible_ref}></div>
						<div className={styles.card_txt_wrapper}>
							<h2 className={styles.card_title}>
								{lang ? card.titleEn : card.titleEs}
							</h2>
							<p className={styles.card_txt}>
								{lang ? card.txtEn : card.txtEs}
							</p>
						</div>
					</article>
				))}
			</div>
			<div className={styles.stepper}>
				{cards?.map((card, index) => (
					<span
						key={index}
						className={`${styles.step} ${
							card.observerHook.inView
								? styles.bright
								: styles.opaque
						}`}></span>
				))}
			</div>
		</section>
	);
}

PurposeSection.propTypes = {
	lang: PropTypes.bool,
};
