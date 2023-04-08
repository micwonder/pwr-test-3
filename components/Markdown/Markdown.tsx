import MarkdownToJSX from 'markdown-to-jsx'
import React from 'react'

const Markdown: React.FC<{ source?: string }> = ({ source }) => {
  if (!source || source.trim().length === 0) {
    return <></>
  }
  return <MarkdownToJSX options={{ forceWrapper: true }}>{source}</MarkdownToJSX>
}

export default Markdown
