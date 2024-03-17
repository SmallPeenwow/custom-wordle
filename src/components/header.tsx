import Image from 'next/image';
import React from 'react';

const Header = () => {
	return (
		<div className='flex flex-col gap-5 justify-center items-center w-[400px]'>
			<h1 className='text-5xl font-bold'>Custom Wordle</h1>
			<div className='flex items-center justify-start gap-5 w-[inherit]'>
				<Image
					src='/icons/info.svg'
					alt='information'
					width={40}
					height={40}
					tabIndex={1}
					className='cursor-pointer'
				/>
				<button
					className='text-[#4866a7] hover:underline focus:underline active:underline text-2xl bg-[#222425] p-3 rounded-xl shadow-md shadow-[#4866a7] font-semibold'
					tabIndex={2}
				>
					Make your own wordle
				</button>
			</div>
		</div>
	);
};

export default Header;
