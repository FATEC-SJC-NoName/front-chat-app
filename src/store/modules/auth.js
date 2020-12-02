import axios from 'axios';

let idUsuario = ""

const state = {
    //user: '',
    userInfo: {},
    contatosInfo: {},
    jwt: localStorage.getItem("jwt") || ""
  
}

const getters = {
    isAuthenticated: state => !!state.jwt,
    StateJwt: state => state.jwt,
    StateUserInfo: (state) => state.userInfo,
    StateContatosInfo: (state) => state.contatosInfo
}

const actions = {

    async LogIn({commit}, body){
        axios.defaults.headers.common['Authorization'] = undefined   
        const response = await axios.post("authentication", body)           
        //console.log(response.data.jwt)
        //await axios.post("authentication", user);
        await commit("setJwt", response.data.jwt)      
        localStorage.setItem("jwt", response.data.jwt)
        const jwtRes = response.data.jwt   
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwtRes}`       
    },
    
    async LogOut({commit}){
        localStorage.removeItem("jwt")
        delete axios.defaults.headers.common['Authorization']
        let jwt = ''
        commit('logout',jwt)
    
    },

    async getUserInfo({commit}){
        let response = await axios.get('users/me')
        idUsuario = response.data.id
        commit('setUserInfo', response.data)
    },
    
    async getContatos({commit}){
       console.log(idUsuario)
        let response = await axios.get('users/'+idUsuario+'/contacts')   
        commit('setContatos', response.data)

    },
    
    async CreateActivitie({dispatch}, body){
        //console.log(body)
        await axios.post('activities', body)
        await dispatch("getUserInfo")
       
  
    },
/*
    async GetActivities({ commit }) {
        let response = await axios.get("userInfo");
        commit("setUserInfo", response.data);
    },
*/

 
}

const mutations = {
    setJwt(state, jwtinfo){
        state.jwt = jwtinfo
    },
    setUserInfo(state, userInfoMe){
        state.userInfo = userInfoMe
    },
    setContatos(state,  contatos){
        state.contatosInfo =  contatos
    },
    /*
    setUser(state, username){
        state.user = username
    },*/
    logout(state){
        state.jwt = ""
        state.userInfo = ""
        state.contatosInfo = ""
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}