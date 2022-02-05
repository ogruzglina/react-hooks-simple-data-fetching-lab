import React, { useEffect, useState } from 'react';

function App () {
    const [ imageSrc, setImageSrc ] = useState('');

    useEffect( () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(img => setImageSrc(img))
    }, []);

    if (!imageSrc) {
        return <p>Loading...</p>
    }

    return <img src = {imageSrc.message} alt = "A Random Dog" />
}

export default App;