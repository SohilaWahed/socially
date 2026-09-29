import type { User } from "@/types/Auth.types";
import type { Story } from "@/types/feed.types";


export const dummyUsers: User[] = [
  {
    _id: 'usr_101',
    name: 'أحمد محمود',
    username: 'ahmed_mahmoud',
    email: 'ahmed@example.com',
    photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
    cover: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?auto=format&fit=crop&w=1000&q=80',
  },
  {
    _id: 'usr_102',
    name: 'سارة علي',
    username: 'sara_ali',
    email: 'sara@example.com',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
  },
  {
    _id: 'usr_103',
    name: 'عمر خالد',
    username: 'omarkhaled',
    email: 'omar@example.com',
    photo: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=300&q=80',
    cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    _id: 'usr_104',
    name: 'مريم يوسف',
    username: 'mariam_youssef',
    email: 'mariam@example.com',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
  },
];

export const dummyStories: Story[] = [
  {
    id: 'story_1',
    user: dummyUsers[0],
    content: 'صباح الخير جميعاً! ☀️ أتمنى لكم يوماً سعيداً ومثمراً.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    createdAt: '2026-09-27T08:30:00.000Z',
    isViewed: false,
  },
  {
    id: 'story_2',
    user: dummyUsers[1],
    content: 'تصوير اليوم من أجمل الأماكن الطبيعية 🌿📸',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
    createdAt: '2026-09-27T10:15:00.000Z',
    isViewed: true,
  },
  {
    id: 'story_3',
    user: dummyUsers[2],
    content: 'ساعة من القراءة الهادئة مع فنجان قهوة ☕️📚 ما هو كتابكم المفضل؟',
    // استوري نصية بدون صورة (image optional)
    createdAt: '2026-09-27T12:00:00.000Z',
    isViewed: false,
  },
  {
    id: 'story_4',
    user: dummyUsers[3],
    content: 'جاهزين لمشروعنا الجديد في Frontend! 🚀💻',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    createdAt: '2026-09-27T14:45:00.000Z',
    isViewed: false,
  },
  {
    id: 'story_5',
    user: dummyUsers[0],
    content: 'صباح الخير جميعاً! ☀️ أتمنى لكم يوماً سعيداً ومثمراً.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    createdAt: '2026-09-27T08:30:00.000Z',
    isViewed: false,
  },
  {
    id: 'story_6',
    user: dummyUsers[1],
    content: 'تصوير اليوم من أجمل الأماكن الطبيعية 🌿📸',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
    createdAt: '2026-09-27T10:15:00.000Z',
    isViewed: true,
  },
  {
    id: 'story_7',
    user: dummyUsers[2],
    content: 'ساعة من القراءة الهادئة مع فنجان قهوة ☕️📚 ما هو كتابكم المفضل؟',
    // استوري نصية بدون صورة (image optional)
    createdAt: '2026-09-27T12:00:00.000Z',
    isViewed: false,
  },
  {
    id: 'story_8',
    user: dummyUsers[3],
    content: 'جاهزين لمشروعنا الجديد في Frontend! 🚀💻',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    createdAt: '2026-09-27T14:45:00.000Z',
    isViewed: false,
  },
  {
    id: 'story_9',
    user: dummyUsers[0],
    content: 'صباح الخير جميعاً! ☀️ أتمنى لكم يوماً سعيداً ومثمراً.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    createdAt: '2026-09-27T08:30:00.000Z',
    isViewed: false,
  },
  {
    id: 'story_10',
    user: dummyUsers[1],
    content: 'تصوير اليوم من أجمل الأماكن الطبيعية 🌿📸',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
    createdAt: '2026-09-27T10:15:00.000Z',
    isViewed: true,
  },
  {
    id: 'story_11',
    user: dummyUsers[2],
    content: 'ساعة من القراءة الهادئة مع فنجان قهوة ☕️📚 ما هو كتابكم المفضل؟',
    // استوري نصية بدون صورة (image optional)
    createdAt: '2026-09-27T12:00:00.000Z',
    isViewed: false,
  },
  {
    id: 'story_12',
    user: dummyUsers[3],
    content: 'جاهزين لمشروعنا الجديد في Frontend! 🚀💻',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    createdAt: '2026-09-27T14:45:00.000Z',
    isViewed: false,
  },
];