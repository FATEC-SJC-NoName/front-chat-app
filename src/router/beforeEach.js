import store from '../store'

export default async(to, from, next) => {
    document.title = `${to.name}`

    if(to.name != 'login' && !store.getters['auth/hasJwt']){
        try {
            await store.dispatch('auth/ActionCheckJwt')
            next({name: to.name})
        } catch (error) {
            next({name: 'login'})
        }
    }else{
        if(to.name == 'login' && store.getters['auth/hasJwt']){
            next({name: 'home'})
        }else{
            next()
        }
    }

}