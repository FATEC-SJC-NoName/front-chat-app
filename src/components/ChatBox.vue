  
<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-6 my-5">

                <div class="card">
                    <h2 class="card-header bg-success rounded text-white">Chat E-Condutor</h2>
                    <div class="card-body">
                        <div class="form-group">
                            <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar">
                            <p class="text-center font-weight-bold mt-5 mb-4">Dúvidas frequentes</p>
                            <p class="text-center text-secondary">Clique no assunto abaixo para verificar a melhor solução.</p>
                            <div class="list-group my-5">
                                <!---->
                                <a class="list-group-item list-group-item-action" href="#">1 - Segunda via de boleto</a>
                                <a class="list-group-item list-group-item-action" href="#">2 - Verificar hora e dia das minhas aulas</a>
                                <a class="list-group-item list-group-item-action" href="#">3 - Agendar aula</a>
                                <a class="list-group-item list-group-item-action" href="#">4 - Outro</a>
                            </div>
                            <label class="font-weight-bold my-3">Nenhuma das opções?</label>
                            <button type="button" class="btn-lg btn-block btn-success rounded">Clique aqui para falar com um atendente</button>
                        </div>
                    </div>
                </div>

            </div>

             <div class="col-6 my-5 ">

                <div class="card" style="height: 100%">
                    <h2 class="card-header bg-success rounded text-white">Chat E-Condutor</h2>
                    <div class="card-body ">
                        <div class="form-group" >
                            <div class="tile is-parent is-vertical" >
                                
                                    <label>Aguarde, logo um atendente irá falar com você.</label>
                                
                                    <div class="tile is-child box " style="background-color:#F5F5F5; font-size:14px">
                                        
                                        <label class="text-left font-weight-bold "><b-icon icon="user" size='is-large' ></b-icon>Olá, meu nome é Pedro. Em que posso ajuda-lo?</label>
                                    </div>
                                    
                                    <div class="tile is-child box" style="background-color:#00FF7F;font-size:14px">
                                        
                                        <label class="text-left font-weight-bold ">Olá, gostaria de agendar aula. </label><b-icon icon="user" size='is-large'></b-icon>
                                    </div>
                                
                            </div>                
         
                        </div>
                        
                    </div>
                    <footer class="footer">
                        <b-field>
                            <b-input rounded size="is-large"></b-input>
                            <p class="control">
                                <b-button class="button is-success" size="is-large" rounded><b-icon icon="paper-plane"></b-icon></b-button>
                            </p>
                        </b-field>
                    </footer>
                </div>
                
            </div>
        </div>
    </div>
</template>
<style  scoped>


</style>
<script>
export default {
  name: 'ChatBox',
  
  }
</script>

