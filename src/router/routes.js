import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'
import { routes as chat } from '../modules/chat'
import { routes as alunos } from '../modules/dashboard/alunos'
import { routes as atendentes } from '../modules/dashboard/atendentes'
import { routes as atividades } from '../modules/dashboard/atividades'
import { routes as diretores } from '../modules/dashboard/diretores'
import { routes as instrutores } from '../modules/dashboard/instrutores'
import { routes as testes } from '../modules/dashboard/testes'

export default [
    ...auth,
    ...home,
    ...alunos,
    ...atendentes,
    ...atividades,
    ...diretores,
    ...instrutores,
    ...testes,
    ...chat
]