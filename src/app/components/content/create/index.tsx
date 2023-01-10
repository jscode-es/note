import style from './style.module.css';
import Image from 'next/image';

export function CreateContent() {
	return (
		<div className={style.container}>
			<div className={style.center}>
				<Image
					src='/assets/checklist.png'
					alt='checklist'
					width={100}
					height={100}
				/>
				<h4>Escribe una nueva idea</h4>
				<p>Que no se te olviden las cosas nunca más</p>
				<button>Crear idea</button>
			</div>
		</div>
	);
}
