'use client';

import Board from '@/components/board';
import Header from '@/components/header';
import HowToPlay from '@/components/howToPlay';
import Keyboard from '@/components/keyboard';
import { useState } from 'react';

export default function Home() {
	const [isHowToPlayShow, setIsHowToPlayShow] = useState<boolean>(false);

	const displayHowToPlay = () => {
		setIsHowToPlayShow(!isHowToPlayShow);
	};

	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 bg-[#191a1b] gap-2 relative'>
			<Header setDisplayHowToPlay={displayHowToPlay} />
			<Board />
			<Keyboard />
			{isHowToPlayShow && <HowToPlay setDisplay={displayHowToPlay} />}
		</main>
	);
}
