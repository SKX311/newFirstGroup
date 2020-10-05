import {get,post} from "../http/http.js"
export function getBanner(){
    return get("banner")
}
export function getFamousList(){
    return get("recommend/appIndex")
}