import Image from 'next/image';
import React from 'react';
import InputSquare from './inputSquare';
import * as Constants from '@/constants/constants';

interface IHowToPlay {
	setDisplay: () => void;
}

const HowToPlay = ({ setDisplay }: IHowToPlay) => {
	return (
		<div className='popUpBackground'>
			<div className='popUpChildContainer'>
				<Image
					src='/icons/x-circle.svg'
					alt='information'
					width={30}
					height={30}
					tabIndex={1}
					className='cursor-pointer hover:scale-110 transition ease-linear delay-150 duration-300 absolute right-4 top-3'
					onClick={setDisplay}
				/>

				<h1 className='text-xl font-bold'>How to play</h1>

				<p className='text-center howToPlayChildParagraph'>
					Guess the WORDLE in 6 tries. After each guess, the
					<br /> color of the tiles will change to show how to close your
					<br /> guess was to the word.
				</p>

				<div className='howToPlayParentContainer'>
					<div className='howToPlayFirstChildDiv'>
						{Constants.ArrayPlaceholderOne.map((letter, index) => (
							<InputSquare
								letter={letter}
								isDisabled={true}
								letterType={index === 0 ? 'green' : ''}
								key={index}
							/>
						))}
					</div>

					<p className='howToPlayChildParagraph'>
						The letter W is in the word and in the correct spot.
					</p>
				</div>

				<div className='howToPlayParentContainer'>
					<div className='howToPlayFirstChildDiv'>
						{Constants.ArrayPlaceholderTwo.map((letter, index) => (
							<InputSquare
								letter={letter}
								isDisabled={true}
								letterType={index === 2 ? 'yellow' : ''}
								key={index}
							/>
						))}
					</div>

					<p className='howToPlayChildParagraph'>
						The letter L is in the word but in the wrong spot.
					</p>
				</div>

				<div className='howToPlayParentContainer'>
					<div className='howToPlayFirstChildDiv'>
						{Constants.ArrayPlaceholderThree.map((letter, index) => (
							<InputSquare
								letter={letter}
								isDisabled={true}
								letterType={index === 3 ? 'gray' : ''}
								key={index}
							/>
						))}
					</div>

					<p className='howToPlayChildParagraph'>The letter U is not in the word in any spot.</p>
				</div>
			</div>
		</div>
	);
};

export default HowToPlay;
