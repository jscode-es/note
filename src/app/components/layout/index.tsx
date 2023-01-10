import Head from 'next/head';
import { Content } from '../content';
import { Menu } from '../menu';
import style from './style.module.css';

export function Layout({ children, title, description }: any) {
	return (
		<>
			<Head>
				<title>NoteApp</title>
				<meta
					id='description'
					name='description'
					content='NoteApp'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>

			<main className={style.container}>
				<Menu />
				<Content />
			</main>
		</>
	);
}
