import Image from 'next/image';
import React from 'react';

const Header = () => {
	return (
		<div>
			<h1 className='text-6xl font-bold'>Custom Wordle</h1>
			<div>
				<Image src='/icons/info.svg' alt='information' width={50} height={50} />
			</div>
		</div>
	);
};

export default Header;
