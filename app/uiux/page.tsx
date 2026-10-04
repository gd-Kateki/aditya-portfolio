import { ProjectCollection } from '@/components/project-collection';
import { collectionMetadata } from '@/lib/metadata';
export const metadata=collectionMetadata('UI/UX Projects','Interface concepts, seller dashboards, and website redesigns by Aditya Nair.','/uiux/','/images/social/uiux.jpg');
export default function Page(){return <ProjectCollection discipline="ux"/>;}
