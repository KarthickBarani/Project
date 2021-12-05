// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';






// Your render function
export const PdfViwer = () => {
    return (
        <Viewer fileUrl="./dummy.pdf" />
    )

}