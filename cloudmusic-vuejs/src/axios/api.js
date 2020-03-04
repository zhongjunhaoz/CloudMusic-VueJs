import {get} from './http'

let URL_ROOT=''
if(process.env.NODE_ENV === 'production'){ //判断 开发环境则空，生产环境则加上/api
    URL_ROOT = '/api'
}

const rank = params => get(URL_ROOT + '/top/list',params); //排行榜
const hotSong = params => get(URL_ROOT + '/search/hot',params); //热门搜索
const searchSuggest = params => get(URL_ROOT + '/search/suggest',params); //搜索建议
const search = params => get(URL_ROOT + '/search',params); //搜索

export {
    rank,
    hotSong,
    searchSuggest,
    search
}