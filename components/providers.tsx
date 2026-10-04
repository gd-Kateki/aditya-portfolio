'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';
export type Discipline = 'all' | 'game' | 'ux';
const Context = createContext<{ discipline: Discipline; setDiscipline: (value: Discipline) => void }>({ discipline: 'all', setDiscipline: () => {} });
export function Providers({ children }: { children: ReactNode }) {
  const [discipline, setDiscipline] = useState<Discipline>('all');
  return <Context.Provider value={{ discipline, setDiscipline }}><div data-discipline={discipline}>{children}</div></Context.Provider>;
}
export const useDiscipline = () => useContext(Context);
