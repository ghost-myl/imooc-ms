import JsonP from 'jsonp'
import axios from 'axios'

export default class Axios {
    // 声明类的静态方法 使用: Axios.jsonp({url})
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(
                options.url,
                {
                    param: 'callback'
                },
                function (err, res) {
                    if (res.status === 'success') {
                        resolve(res)
                    }
                    else {
                        reject(err.message)
                    }
                }
            )
        })
    }

    static ajax(opt) {
        let baseApi = 'https://www.easy-mock.com/mock/5ce0b51305862a19a867f43a/imooc';

        return new Promise((resolve, reject) => {
            axios({
                url: baseApi + opt.url,
                method: 'get',
                // params: (opt.data.params && opt.data) || ''
            })
                .then(res => {
                    if (res.status === 200) {
                        resolve(res.data)
                    }
                    else {
                        reject(res.data)
                    }
                })
        })
    }

}