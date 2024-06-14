import React from "react";
import Image from "next/image";
import Icon from '../../../public/images/logo_test.png';

const Logo = () => {
	return (
		<div>
			<Image src={Icon} alt="logo" width={70} height={25} style={{ borderRadius: "50%" }} />
		</div>
	);
};

export default Logo;
