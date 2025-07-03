import ReactMarkdown from 'react-markdown'

function MarkdownViewer({ markdownText }) {
    return <ReactMarkdown>{markdownText}</ReactMarkdown>
}

function Recipe({ recipe }) {
    return (
        <section className='suggested-recipe-container'>
            <MarkdownViewer markdownText={recipe} />
        </section>
    )
}

export default Recipe