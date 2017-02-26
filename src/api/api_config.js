/**
 * Created by ljk on 17/2/26.
 */
const host='http://localhost:8088';
//const version='/v1'
export const AUTH=function () {
  return host+'/auth';
}
export const GET_USER=function () {
  return host+'/getuser'
}
