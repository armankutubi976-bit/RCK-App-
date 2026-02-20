
export interface Member {
  id: string;
  name: string;
  role: string;
  institution: string;
  phone: string;
  email: string;
  bloodGroup: string;
  image: string;
}

export interface UserProfile extends Member {
  userId: string;
  joinDate: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  content: string;
  type: 'urgent' | 'general' | 'academic';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: UserProfile | null;
}
