import { setBearerJwt } from '@/http'

export const setHeaderJwt = jwt => setBearerJwt(jwt)
export const getLocalJwt = () => localStorage.getItem('jwt')
export const deleteLocalJwt = () => localStorage.removeItem('jwt')
export const setLocalJwt = jwt => localStorage.setItem('jwt', jwt)