'use client';

import React from 'react';
import KeyboardButton from './keyboardButton';
import * as Constants from '@/constants/constants';

const Keyboard = () => {
	const OnClickAction = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		console.log((e.target as HTMLInputElement).textContent);
	};

	return (
		<div className='flex justify-center items-center flex-col gap-2'>
			<div className='flex gap-2'>
				{Constants.KeyboardLetters.slice(0, 10).map((letter, index) => (
					<KeyboardButton key={index} word={letter} action={OnClickAction} />
				))}
			</div>
			<div className='flex gap-2'>
				{Constants.KeyboardLetters.slice(10, 19).map((letter, index) => (
					<KeyboardButton key={index} word={letter} action={OnClickAction} />
				))}
			</div>
			<div className='flex gap-2'>
				{Constants.KeyboardLetters.slice(19, 28).map((letter, index) => (
					<KeyboardButton key={index} word={letter} action={OnClickAction} />
				))}
			</div>
		</div>
	);
};

export default Keyboard;
