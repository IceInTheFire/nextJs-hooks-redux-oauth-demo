import MyHead from 'components/MyHead';
import HeaderTop from 'components/Header/headerTop';
import Footer from 'components/Footer/white';
import Error from 'pages/_error.js'
import 'less/base/index.less';
import Loading from 'components/Loading/';
const Layout = (props) => {

    if(props.statusCode){
        return <Error statusCode={props.statusCode} />
    }

    return (
        <div>
            <MyHead meta={props.meta}/>
            <HeaderTop/>

            {/*<Header />*/}
            { props.children }

            <Footer/>
            <Loading/>
        </div>
    )
}

export default Layout
