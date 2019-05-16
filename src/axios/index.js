import JsonP from 'jsonp'


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
}