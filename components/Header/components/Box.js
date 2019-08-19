import { useContext } from 'react';
import Login from './Login';
import User from './User';
import Bis from './Bis';
import { DataContext, INIT_COOKIES  } from 'store/data';


const Box = ({ cookies }) => {
    let { data, dispatch } = useContext(DataContext);

    if(!data.token) {
        return <Login/>;
    } else if(data.user){
        return <User/>;
    } else if(data.bis) {
        return <Bis/>;
    } else {
        return <Login/>;
    }
}


export default Box;