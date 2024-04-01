import Image from 'next/image';
import React from 'react';
import LanguageOptions from './languageOptions';

interface ICreateWordGame {
	setDisplay: () => void;
}

const CreateWordGame = ({ setDisplay }: ICreateWordGame) => {
	return (
		<div className='popUpBackground'>
			<div className='popUpChildContainer !pb-7 w-[400px] relative'>
				<div className='flex justify-between mt-5 items-center w-full'>
					<LanguageOptions />
					<Image
						src='/icons/x-circle.svg'
						alt='information'
						width={30}
						height={30}
						tabIndex={1}
						className='cursor-pointer hover:scale-110 transition ease-linear delay-150 duration-300 absolute right-3 top-3'
						onClick={setDisplay}
					/>
				</div>

				<div className='flex flex-col items-center mt-5'>
					<h1 className='text-2xl font-bold'>Make Custom Wordle</h1>
					<p className='leading-3 text-[15px]'>Word can be of any length</p>
				</div>

				<input
					type='text'
					placeholder='Enter Custom Word'
					className='text-base font-bold w-60 text-center py-3 px-8 rounded-lg bg-transparent placeholder-bronze text-bronze outline outline-1 outline-bronze'
				/>

				<p className='text-[#3993d9] font-bold cursor-pointer hover:underline hover:decoration-[#3993d9] underline-offset-4'>
					Generate Link
				</p>

				<div className='flex flex-col items-center'>
					<h2 className='font-bold'>OR</h2>

					<p className='text-[#3993d9] font-bold cursor-pointer hover:underline text-[15px] hover:decoration-[#3993d9] underline-offset-4'>
						Play Random Word
					</p>
				</div>
			</div>
		</div>
	);
};

export default CreateWordGame;
