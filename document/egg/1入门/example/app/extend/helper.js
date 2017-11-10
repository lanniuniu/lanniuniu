/**
 * Created by 懒牛牛 on 2017/11/9.
 */

const moment = require('moment');
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();



