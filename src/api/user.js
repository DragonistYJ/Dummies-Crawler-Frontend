import request from '@/util/request.js'

export const register = (params, succFun, errFun) => {
  request.send('user/register', params, succFun, errFun)
}

export const login = (params, succFun, errFun) => {
  request.send('user/login', params, succFun, errFun)
}

export const logout = (succFun, errFun) => {
  request.send('logout', null, succFun, errFun)
}

export const queryUser = (params, succFun, errFun) => {
  request.send('userManage/queryUser', params, succFun, errFun)
}

export const delUser = (ids, succFun, errFun) => {
  request.send('userManage/delUser', {
    ids
  }, succFun, errFun)
}
