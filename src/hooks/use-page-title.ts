import { useEffect } from 'react';
import { brandData } from '../data/brand';

// sets the document title to "<title> | ByteSpace" while the page is mounted
export default function usePageTitle(title?: string) {
    const { alt } = brandData.logo;

    useEffect(() => {
        document.title = title ? `${title} - ${alt}` : alt;
    }, [title, alt]);
}
