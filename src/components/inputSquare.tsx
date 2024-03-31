import React from 'react';

type InputSquareProps = {
	letter: string;
};

const InputSquare = ({ letter }: InputSquareProps) => {
	return (
		<button
			className={`h-[58px] w-[58px] border-2 border-[#2a3849] text-[2rem] flex justify-center items-center uppercase bg-transparent rounded-md focus:outline-[#3e536d] focus:outline focus:outline-2 focus:border-transparent transition-all duration-300`}
			disabled={false}
		>
			{letter}
		</button>
	);
};

export default InputSquare;
