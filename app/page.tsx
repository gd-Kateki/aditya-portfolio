import { Hero } from '@/components/hero';
import { Work } from '@/components/work';
import { Experience } from '@/components/experience';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
export default function Home() {
  return <><main id="main-content"><Hero /><Work /><Experience /><About /></main><Contact /></>;
}
