import axios from 'axios';
if(process.env.NODE_ENV=='development'){
    axios.defaults.baseURL='http://120.53.31.103:84/api/app/'
}
if(process.env.NODE_ENV=='production'){
    axios.defaults.baseURL='https://wap.365msmk.com'
}

axios.defaults.timeout=5000;
axios.interceptors.request.use(
    config=>{
        config.headers={DeviceType:"H5"}
        return config;
    }
)

export function get(url,params){
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            params:params
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
export function post(url,params){
    return new Promise((resolve,reject)=>{
        axios.post(url,{
            params:params
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err.data)
        })
    })
}