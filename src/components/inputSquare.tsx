import React from 'react';

type InputSquareProps = {
	letter: string;
	isDisabled?: boolean;
	letterType?: string;
};

const InputSquare = ({ letter, isDisabled = false, letterType }: InputSquareProps) => {
	return (
		<button
			className={`h-[58px] w-[58px] border-2 border-[#2a3849] text-2xl flex justify-center items-center uppercase bg-transparent rounded-md font-bold focus:outline-[#3e536d] focus:outline focus:outline-2 focus:border-transparent transition-all duration-300 ${letterType}`}
			disabled={isDisabled}
		>
			{letter}
		</button>
	);
};

export default InputSquare;
