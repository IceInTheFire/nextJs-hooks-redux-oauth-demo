import {useState, useEffect} from 'react';
import Link from 'next/link';

import UserBox from './UserBox';
import BisBox from './BisBox';

const Box = (props) => {
    const {isUser} = props;
    if (isUser) {
        return <UserBox/>;
    } else {
        return <BisBox/>;
    }
}

export default Box;