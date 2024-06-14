import React from "react";
import Image from "next/image";
import Icon from '../../../public/images/logo.png';

const Logo = () => {
	return (
		<div>
			<Image src={Icon} alt="logo" width={120} height={25} />
		</div>
	);
};

export default Logo;
