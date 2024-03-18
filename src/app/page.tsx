import Board from '@/components/board';
import Header from '@/components/header';
import Keyboard from '@/components/keyboard';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 bg-[#191a1b] gap-2'>
			<Header />
			<Board />
			<Keyboard />
		</main>
	);
}
