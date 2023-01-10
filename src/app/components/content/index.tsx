import { CreateContent } from './create';
import style from './style.module.css';

export function Content() {
	return (
		<div className={style.container}>
			<CreateContent />
		</div>
	);
}
