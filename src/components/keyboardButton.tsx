import React from 'react';

interface IKeyboardButton {
	word: string;
	action: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// TODO: make value
const KeyboardButton = ({ word, action }: IKeyboardButton) => {
	return (
		<button
			className='bg-[#434d5d] text-white px-5 py-5 text-xl capitalize rounded hover:bg-[#697892] hover:scale-105 transition ease-linear delay-0 duration-300'
			onClick={action}
		>
			{word}
		</button>
	);
};

export default KeyboardButton;
