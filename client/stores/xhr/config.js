// 此处配置 根访问路径 以及 全局错误处理
// 更多配置请根据业务逻辑自行实现

// 后端 API 地址，最好以 http(s):// 打头

export const rootPath = 'http://127.0.0.1:5050';

// export const rootPath = 'http://222.84.159.192:6060'

// 每隔5分钟刷新token，单位毫秒
export const refreshTime = 500000

// token失效重新登录，单位毫秒
export const expiredTime = 20000000

// token
export const tokenName = "jwtToken"

export const lastAction = "lastAction"


