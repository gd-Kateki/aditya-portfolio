'use client';
import { useDiscipline, type Discipline } from './providers';
export function DisciplineSwitch({ label = 'Choose a design discipline' }: { label?: string }) {
  const { discipline, setDiscipline } = useDiscipline();
  return <div className="discipline-switch" role="group" aria-label={label}>
    {([['all', 'All work'], ['game', 'Game design'], ['ux', 'UI/UX']] as [Discipline, string][]).map(([value, name]) => <button key={value} type="button" aria-pressed={discipline === value} onClick={() => setDiscipline(value)}>{name}</button>)}
  </div>;
}
