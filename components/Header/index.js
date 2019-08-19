import Link from 'next/link';

const h1 = {
    width: '200px',
    display: 'inline-block',
    textAlign: 'center',
    cursor: 'pointer',
};

const Index = () => (
    <div>
        <nav>
            <Link href="/">
                <h1 style={h1}>普通的react</h1>
            </Link>
            <Link href="/normal">
                <a>普通写法</a>
            </Link>
            <Link href="/redux">
                <a>redux</a>
            </Link>
        </nav>
        {/*<style jsx global>*/}
        <style jsx>
            {`
                nav{
                    height: 50px;
                    width: 100%;
                    line-height: 50px;
                    background: #626365;
                    color:#fff;
                    font-size:28px;
                    padding: 0 10px;
                }
                h1{
                    width: 200px;
                    display: inline-block;
                    text-align: center;
                }
                a{
                    color:#EF141F;
                    text-decoration:none;
                    text-transform:uppercase;
                    // background:#123456;
                    display: inline-block;
                    padding: 0 10px;
                    color:#fff;
                }
                a:hover{
                    // text-decoration:underline;
                    background:#fff;
                    color:#626365;              
                }
            `}
        </style>
    </div>
)

export default Index;
