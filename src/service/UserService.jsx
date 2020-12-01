import axios from 'axios'
import Util from '../util/Util'

const _util = new Util();

class User {
    login(loginInfo) {
        const params = _util.getParams(loginInfo);

        return axios.post('/api/manage/user/login.do', params);
    }
}