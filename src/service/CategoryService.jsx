import Util from '../util/Util'
const _util = new Util();

class CategoryService {
    getCategory(params) {
        return _util.request('/api/manage/category/get_category.do', _util.getParams(params));
    }
    getCategoryList(params) {
        return _util.request('/api/manage/category/get_category_list.do', _util.getParams(params));
    }
    setCategoryName(params) {
        return _util.request('/api/manage/category/set_category_name.do', _util.getParams(params));
    }
}

export default CategoryService;