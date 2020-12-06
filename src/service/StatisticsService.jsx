import Util from "../util/Util";

const _util = new Util();

class StatisticsService {
    getBaseCount() {
        return _util.request('/api/manage/statistic/base_count.do');
    }
}

export default StatisticsService;