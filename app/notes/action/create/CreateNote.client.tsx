'use client';

import NoteForm from '@/components/NoteForm/NoteForm';

type CreateNoteClientProps = {
  tags: string[];
};
export default function CreateNoteClient({ tags }: CreateNoteClientProps) {
  return <NoteForm tags={tags} />;
}
