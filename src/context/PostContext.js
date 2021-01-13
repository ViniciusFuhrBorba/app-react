import React, { createContext, useState, useContext } from 'react';


export const PostContext = createContext();


export default function PostProvider({ children }) {

    const [image, setImage] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [tags, setTags] = useState([]);
    const [markdownText, setMarkdownText] = useState('');

    const handleTitleChange = (event) => {
        setTitulo(event.currentTarget.value);
    }
    const handleTagsChange = (event, values) => {
        setTags(values);
    }
    const handleMarkdownChange = (event) => {
        setMarkdownText(event.currentTarget.value)
    }

    return <PostContext.Provider value={{
        image,
        setImage,
        titulo,
        setTitulo: handleTitleChange,
        tags,
        setTags: handleTagsChange,
        markdownText,
        setMarkdownText: handleMarkdownChange
    }}>
        {children}
    </PostContext.Provider>
}



export function usePost() {
    const ctx = useContext(PostContext);
    const { titulo, setTitulo, image, setImage, tags, setTags, markdownText, setMarkdownText } = ctx;
    return { titulo, setTitulo, image, setImage, tags, setTags, markdownText, setMarkdownText }
}