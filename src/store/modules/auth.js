import axios from 'axios';


const state = {
    //user: '',
    userInfo: {},
    jwt: localStorage.getItem("jwt") || "",
  
}

const getters = {
    isAuthenticated: state => !!state.jwt,
    StateJwt: state => state.jwt,
    StateUserInfo: (state) => state.userInfo 
}

const actions = {

    async LogIn({commit}, body){
   
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
        commit('setUserInfo', response.data)
    },
    
    async CreateActivitie(activitie){
        await axios.post('activities', activitie)
        //return await dispatch("getUserInfo")       
  
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
    /*
    setUser(state, username){
        state.user = username
    },*/
    logout(state){
        state.jwt = ""
        state.userInfo = ""
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}