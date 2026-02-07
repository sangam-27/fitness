import React from 'react';
import contactdetailclasses from './ContactDetails.module.css';

const ContactDetails = () => {
	return (
		<div className={contactdetailclasses['contact-details__wrapper']}>
			<ul className={contactdetailclasses['contact-details__lists']}>
				<li>
					<h4>Find Us</h4>
					<a>
						<p>
							1925 Jawahar Colony
							<br /> Faridabad
							<br /> Haryana, India
						</p>
					</a>
				</li>
				<li>
					<h4>General Contact</h4>
					<a>
						<p>
							T – 1 310 556 0155 <br />
							info@systembolte.com
						</p>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default ContactDetails;
