import ReactMarkdown from 'react-markdown'

function MarkdownViewer({ markdownText }) {
    return <ReactMarkdown>{markdownText}</ReactMarkdown>
}

function Recipe({ recipe }) {
    return (
        <section>
            <MarkdownViewer markdownText={recipe} />
        </section>
    )
}

export default Recipe