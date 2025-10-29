import DOMPurify from 'dompurify';

function RichTextViewer({ html }) {
    const safeHtml = DOMPurify.sanitize(html);

    return (
        <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
    );
}
export default RichTextViewer;
