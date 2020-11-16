import services from '@/http' 
import * as storage from '../storage'
import * as types from './mutation-types'


export const ActionDoLogin = ({dispatch}, payload) =>{
  return services.auth.authentication(payload).then(res => {
    dispatch('ActionSetJwt', res.data.jwt) 
  })
}

export const ActionCheckJwt = ( {dispatch}, state ) => {
  if(state.jwt){
    return Promise.resolve(state.jwt)
  }

  const jwt = storage.getLocalJwt()

  if(!jwt){
    return Promise.reject(new Error('Jwt inválido'))
  }

  dispatch('ActionSetJwt', jwt)
  return dispatch('ActionMe')
}

export const ActionMe = ({ dispatch }) => {
  return async (resolve, reject) => {
    try {
      const { data } = await services.auth.me()
      dispatch('ActionSetUser', data)
      resolve()
    } catch (err) {
      dispatch('ActionSignOut')
      reject(err)
    }
  }
}

export const ActionSetUser = ( {commit}, payload) => {
  commit(types.SET_USER, payload)
}

export const ActionSetJwt = ( {commit}, payload) => {
  storage.setLocalJwt(payload) 
  storage.setHeaderJwt(payload) 
  commit(types.SET_JWT, payload)
}


export const ActionSignOut = ({dispatch}) => {
  storage.setHeaderJwt('')
  storage.deleteLocalJwt()
  dispatch('ActionSetUser', {})
  dispatch('ActionSetJwt', {})
}




/* methods: {
    async login() {
      const loginResponse = await login({
        username: "test@test.com",
        password: "1234"
      });
      const meResponse = await me({ jwt: loginResponse.jwt });
      await createActivity({
        title: "Nova atividade",
        userId: meResponse.id,
        description: "mais uma",
        isActive: true,
        jwt: loginResponse.jwt
      });
      const meResponse2 = await me({ jwt: loginResponse.jwt });
      console.log(meResponse2);
    }
  } */