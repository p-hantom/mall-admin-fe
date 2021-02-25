import Util from '../util/Util'
const _util = new Util();
class ProductService {
    getProductList(params) {
        return _util.request('/api/manage/product/list.do', _util.getParams(params));
    }
    getProductDetail(params) {
        return _util.request('/api/manage/product/detail.do', _util.getParams(params));
    }
    // Update / Add a product
    saveProduct(params) {
        return _util.request('/api/manage/product/save.do', _util.getParams(params));
    }
    // Upload picture
    uploadPic(params) {
        return _util.request('/api/manage/product/upload.do', params);
    }

    setSaleStatus(params) {
        return _util.request('/api/manage/product/set_sale_status.do', _util.getParams(params));
    }
}

export default ProductService;