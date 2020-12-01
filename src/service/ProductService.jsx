import Util from '../util/Util'
const _util = new Util();
class ProductService {
    getProductList(params) {
        return _util.request('/api/manage/product/list.do', _util.getParams(params));
    }
}

export default ProductService;