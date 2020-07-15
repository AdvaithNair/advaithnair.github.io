export interface Project {
    title: string;
    description: string;
    repo: string;
    site?: string;
}

export const openLink = (url: string):void => {
    const win = window.open(url, '_blank');
    win!.focus();
}