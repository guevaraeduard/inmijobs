import { createFileRoute } from '@tanstack/react-router';
import { ProfileHeader, ProfileSidebar, ProfileFeed } from '@/features/profile';
import type { User, Post, Friend, Photo } from '@/features/profile';
import { useState } from 'react';

export const Route = createFileRoute('/(private)/profile')({
    component: ProfilePage,
});

function ProfilePage() {
    // Mock Data - In a real app, this would come from a query/api
    const [user] = useState<User>({
        id: '1',
        name: 'Meyerowitz Rebeca',
        role: 'UI/UX Designer | Frontend Developer | Figma Expert',
        location: 'Ciudad Guayana · UNEGInforma',
        flags: ['VE', 'CA'],
        avatarUrl: '/assets/mascota/1.png',
        coverUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2070',
        friendsCount: 2,
    });

    const [friends] = useState<Friend[]>([
        { id: '1', name: 'Alexis Diaz', avatarUrl: '/assets/mascota/2.png' }, // Using available asset
        { id: '2', name: 'Eduardo Crespo', avatarUrl: '/assets/brand/icon.png' }, // Using available asset
    ]);

    const [photos] = useState<Photo[]>([
        { id: '1', url: '/assets/brand/isologo.png' },
        { id: '2', url: '/assets/mascota/2.png' },
        { id: '3', url: '/assets/brand/icon.png' },
    ]);

    const [posts] = useState<Post[]>([
        {
            id: '1',
            author: user,
            content: 'Mascota corporativa y concepts arts, para una red social dedicada a turistas e inmigrantes y con enfasis en el desarrollo profesional y la busqueda de trabajos en linea',
            imageUrl: '/assets/mascota/1.png',
            likes: 12,
            comments: 5,
            timestamp: '2 días',
        }
    ]);

    return (
        <div className="container mx-auto max-w-4xl py-3 px-2 sm:px-0 space-y-2">
            <ProfileHeader user={user} />

            {/* Navigation Tabs (Simplified) */}
            <div className="flex border-b dark:border-border overflow-x-auto -mx-2 px-2">
                {['Todo', 'Información', 'Amigos', 'Fotos', 'Reels', 'Más'].map((tab, i) => (
                    <button
                        key={tab}
                        className={`px-3 py-2 font-medium text-sm whitespace-nowrap ${i === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-4 items-start">
                <ProfileSidebar user={user} friends={friends} photos={photos} />
                <ProfileFeed user={user} posts={posts} />
            </div>
        </div>
    );
}
