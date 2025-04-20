export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  coverImage?: string;
  isSticky?: boolean;
} 