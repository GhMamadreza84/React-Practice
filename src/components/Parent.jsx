import React from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

const Parent = () => {
    return (
        <div>
            <ChildA />
            <ChildB />
        </div>
    );
}

export default Parent;
