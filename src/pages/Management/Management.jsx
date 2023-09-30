import React, {useEffect} from 'react';

const Management = () => {
    useEffect(() => {
        document.title = 'Management';
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'center', height: '250px'}}>
            managment
        </div>
    );
};

export default Management;
