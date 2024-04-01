'use client';

import Image from 'next/image';
import React, { useState } from 'react';

//TODO: move to parent
const LanguageOptions = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedLanguage, setSelectedLanguage] = useState<string>('English');

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleLanguageSelect = (language: string) => {
		setSelectedLanguage(language);
		setIsOpen(false);
	};

	return (
		<div className='cursor-pointer text-sm text-bronze flex absolute left-5 top-3 gap-1 outline-1 outline outline-bronze py-1 pl-3 pr-1 rounded-md hover:bg-bronze/40 transition ease-linear'>
			<button>{`Language: ${selectedLanguage}`}</button>

			{isOpen && (
				<div className=''>
					<button onClick={() => handleLanguageSelect('English')}>English</button>
					<button onClick={() => handleLanguageSelect('German')}>German</button>
					<button onClick={() => handleLanguageSelect('Spanish')}>Spanish</button>
				</div>
			)}

			<Image
				src='/icons/chevron-down.svg'
				alt='information'
				width={16}
				height={16}
				className='ml-2'
			/>
		</div>
	);
};

export default LanguageOptions;
