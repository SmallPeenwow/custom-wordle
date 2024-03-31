'use client';

import React, { useEffect } from 'react';
import KeyboardButton from './keyboardButton';
import * as Constants from '@/constants/constants';

const Keyboard = () => {
	const OnClickAction = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		console.log((e.target as HTMLInputElement).value);
	};

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			event.preventDefault();

			const key = event.key;

			if (Constants.KeyboardLetters.includes(key)) {
				console.log(key + ' here');
			}

			// TODO: if Backspace or Delete should do something. When enter press should do something
		};

		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

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
