import { Note } from '../../domain/note';
import { NoteData } from '../interface/note';

export class NoteRepository implements Note {
	private note: NoteData;

	constructor(note: NoteData) {
		this.note = note;
	}

	async save(): Promise<boolean> {
		const { note } = this;

		const isExist = localStorage.getItem(note.id);

		if (isExist) return false;

		localStorage.setItem(note.id, JSON.stringify(note));

		return true;
	}
}
