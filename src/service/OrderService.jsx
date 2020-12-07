import Util from '../util/Util'

const _util = new Util();

class OrderService {
    getOrderList(params) {
        return _util.request('/api/manage/order/list.do', _util.getParams(params));
    }
    getOrderDetail(params) {
        return _util.request('/api/manage/order/detail.do', _util.getParams(params));
    }
}

export default OrderService;