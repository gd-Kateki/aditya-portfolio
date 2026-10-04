import { ProjectCollection } from '@/components/project-collection';
import { collectionMetadata } from '@/lib/metadata';
export const metadata=collectionMetadata('Game Design Projects','Game concepts, level layouts, and environment design by Aditya Nair.','/game-design/','/images/social/game-design.jpg');
export default function Page(){return <ProjectCollection discipline="game"/>;}
