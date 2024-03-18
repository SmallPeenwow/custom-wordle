'use client';

import React, { useEffect, useRef, useState } from 'react';
import InputSquare from './inputSquare';

// TODO: Maybe keep way to track words to input into div that isn't being used
const Board = () => {
	const words: string[] = Array(6).fill('');
	const [inputs, setInputs] = useState(['', '', '', '', '']);

	return (
		<div className='h-auto w-auto p-3'>
			{words.map((word, rowIndex) => (
				<div key={rowIndex} className='h-[62px] grid grid-cols-5 gap-[5px]'>
					{inputs.map((input, columnIndex) => (
						<InputSquare key={columnIndex} letter={input} />
					))}
				</div>
			))}
		</div>
	);
};

export default Board;
