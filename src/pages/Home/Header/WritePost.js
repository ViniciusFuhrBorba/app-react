import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';


function WritePost() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/post/new');
    }

    return (
        <Button variant="contained" color="primary" onClick={handleClick}>Novo Post</Button>
    )


}

export default WritePost;