import { Spin } from 'antd';
import 'antd/lib/spin/style/index.less';
import './less/index.less';
const loading = () =>{
  return (
    <div id="loading">
        <div className={'loading-center'}>
            <Spin tip="Loading..."></Spin>
        </div>
    </div>
  );
};
export default loading;
