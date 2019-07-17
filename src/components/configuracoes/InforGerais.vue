<template>
    <div>
        <h6>Servidor de E-Mail:</h6>
        <b-row>
            <b-col sm="12" md="4">
                <b-form-group label-cols-sm="2" label="SMTP:" label-align-sm="left" label-for="nm_email_smtp">
                    <b-form-input id="nm_email_smtp"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col  sm="12" md="4">
                <b-form-group label-cols-sm="2" label="Login:" label-align-sm="left" label-for="nm_email_login">
                    <b-form-input id="nm_email_login"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col sm="12"  md="4">
                <b-form-group label-cols-sm="2" label="Senha:" label-align-sm="left" label-for="nm_email_senha">
                    <b-form-input id="nm_email_senha" type="password"></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
        <div>
            <h6><b>No caso de smtp autenticado.</b></h6>
        </div>
        <b-row>
            <b-col sm="12 mt-4">
                <b-form-group label-cols-sm="1" label="E-mail de envio:" label-align-sm="left" label-for="nm_email_from">
                    <b-form-input id="nm_email_from"></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
        <h6 class="mt-3">Mensagem de Novo Usuário</h6>
        <div>
            <b-form-textarea id="ds_email_bemvindo_html" v-model="text" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
        </div>
        <h6 class="mt-3">Mensagem de Alteração de Usuário</h6>
        <div>
            <b-form-textarea id="ds_email_alteracao_html" v-model="textuser" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
        </div>
        <div class="text-sm-right col-sm3 mt-5">
            <b-button variant="primary">Saltar Alterações</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: '',
                textuser: ''
            }
        }
    }
</script>

<style>

</style>