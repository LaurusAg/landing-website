import PropTypes from "prop-types";
import {
	RiTwitterXLine,
	RiMailSendLine,
	RiInstagramLine,
	RiLinkedinLine,
} from "react-icons/ri";

export default function SocialMediaNavBar({ props }) {
	return (
		<>
			<nav className={props?.styles?.link_wrapper}>
				<a
					className={props?.styles?.link}
					aria-label="x"
					href="http://twitter.com/laurusag"
					target="_blank"
					rel="noopener noreferrer">
					<RiTwitterXLine className={props?.styles?.link_icon} />
				</a>

				<a
					className={props?.styles?.link}
					aria-label="email"
					href="mailto:nicolas@laurusag.tech"
					target="_blank"
					rel="noopener noreferrer">
					<RiMailSendLine className={props?.styles?.link_icon} />
				</a>

				<a
					className={props?.styles?.link}
					aria-label="instagram"
					href="http://instagram.com/laurus.ag"
					target="_blank"
					rel="noopener noreferrer">
					<RiInstagramLine className={props?.styles?.link_icon} />
				</a>

				<a
					className={props?.styles?.link}
					aria-label="linkedin"
					href="https://www.linkedin.com/company/laurus-ag/"
					target="_blank"
					rel="noopener noreferrer">
					<RiLinkedinLine className={props?.styles?.link_icon} />
				</a>
			</nav>
		</>
	);
}

SocialMediaNavBar.propTypes = {
	props: PropTypes.object,
	styles: PropTypes.object,
};
