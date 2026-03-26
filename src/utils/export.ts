import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

export const exportToPDF = async (elementId: string, filename: string = 'resume.pdf') => {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id ${elementId} not found`);
        alert(`Error: Element with id ${elementId} not found`);
        return;
    }

    // Clean filename
    const cleanFilename = filename.replace(/[^a-z0-9._-]/gi, '_') || 'resume.pdf';

    try {
        console.log('Starting PDF generation for:', elementId);

        // Wait a bit for layout to settle
        await new Promise(resolve => setTimeout(resolve, 200));

        const dataUrl = await toPng(element, {
            quality: 1.0,
            pixelRatio: 2,
            backgroundColor: '#ffffff',
            style: {
                transform: 'none',
                boxShadow: 'none',
            }
        });

        if (!dataUrl) {
            throw new Error('Could not generate image from element');
        }

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: 'a4',
            hotfixes: ['px_scaling'],
        });

        const img = new Image();
        img.src = dataUrl;

        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = img.width;
        const imgHeight = img.height;
        const ratio = pdfWidth / imgWidth;

        const finalWidth = imgWidth * ratio;
        const finalHeight = imgHeight * ratio;

        // Handle multi-page if height exceeds A4
        let heightLeft = finalHeight;
        let position = 0;

        pdf.addImage(dataUrl, 'PNG', 0, position, finalWidth, finalHeight);
        heightLeft -= pdfHeight;

        while (heightLeft >= 0) {
            position = heightLeft - finalHeight;
            pdf.addPage();
            pdf.addImage(dataUrl, 'PNG', 0, position, finalWidth, finalHeight);
            heightLeft -= pdfHeight;
        }

        pdf.save(cleanFilename);
        console.log('PDF exported successfully:', cleanFilename);
    } catch (error: any) {
        console.error('Error generating PDF:', error);
        alert(`Failed to generate PDF: ${error.message || 'Unknown error'}. 
        
Note: This might be caused by modern CSS features. I've switched to a more compatible generator, please try again.`);
    }
};
