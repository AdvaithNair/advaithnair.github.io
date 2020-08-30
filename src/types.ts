export interface Project {
  title: string;
  description: string;
  date: string;
  repo?: string;
  site?: string;
  about?: string;
  tech?: ProjectTech;
  current: boolean;
}

interface ProjectTech {
  general?: Array<string>;
  frontend?: Array<string>;
  backend?: Array<string>;
}

export interface Social {
  name: string;
  link: string;
}

export interface RantData {
  title: string;
  body: string;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  isPrivate: boolean;
}

export interface AgletData {
    title: string;
    body: string;
    price: string;
    general?: Array<string>;
    frontend?: Array<string>;
    backend?: Array<string>;
}

export interface AppendData {
    title: string;
    bio: string;
    body: string;
    color: string;
    general?: Array<string>;
    frontend?: Array<string>;
    backend?: Array<string>;
}

export const openLink = (url: string): void => {
  const win = window.open(url, "_blank");
  win!.focus();
};
