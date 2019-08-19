<template>
    <div class="user-admin">
        <b-form>
            <input id="user-id" type="hidden" v-model="user.id" />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="nomeUsuario">
                        <b-form-input id="nomeUsuario" type="text" v-model="user.nm_usuario" required :readonly="mode === 'remove'" placeholder="Informe o Nome do Usuário..." />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="CPF:" label-for="user-cpf">
                        <b-form-input id="user-cpf" type="text" v-model="user.nr_cpf" required :readonly="mode === 'remove'" placeholder="Informe o Nº do CPF..." />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Email:" label-for="nomeEmail">
                        <b-form-input id="nomeEmail" type="text" v-model="user.nm_email" required :readonly="mode === 'remove'" placeholder="Informe o E-mail..." />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirmar E-mail:" label-for="nomeConfEmail">
                        <b-form-input id="nomeConfEmail" type="text" v-model="user.nm_conf_email" required :readonly="mode === 'remove'" placeholder="Confirme o E-mail..." />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row v-show="mode === 'save'">
                <b-col md="6" sm="12">
                    <b-form-group label="Senha:" label-for="nomeSenha">
                        <b-form-input id="nomeSenha" type="password" v-model="user.nm_senha" required placeholder="Informe a Senha do Usuário..." />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirmar  Senha:" label-for="nomeConfSenha">
                        <b-form-input id="nomeConfSenha" type="password" v-model="user.nm_conf_senha" required placeholder="Confirme a Senha do Usuário..." />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Usuário Ativo:" label-for="idEmpresaTipo">
                        <b-form-select id="idEmpresaTipo" :options="options" v-model="selected" />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Pertence a Empresa:" label-for="idEmpresaTipo">
                        <b-form-select id="idEmpresaTipo" :options="options" v-model="selected" />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Acesso a URL:" label-for="idEmpresaTipo">
                        <b-form-select id="idEmpresaTipo" :options="options" v-model="selected" />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Tipo Usuário:" label-for="idEmpresaTipo">
                        <b-form-select id="idEmpresaTipo" :options="options" v-model="selected" />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-form-checkbox id="user-admin" v-show="mode === 'save'" v-model="user.nm_usuario1" class="mt-3 mb-3">
                Administrador
            </b-form-checkbox>
            <b-row>
                <b-col xs="12" right>
                    <div class="text-sm-right col-sm3">
                        <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
                        <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
                        <b-button class="ml-2" @click="reset">Cancelar</b-button>
                    </div>
                </b-col>
            </b-row>
        </b-form>
        <hr>
        <b-table hover striped :items="users" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadUser(data.item)" class="mr-2">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                </b-button>
                <b-button variant="danger" @click="loadUser(data.item, 'remove')">
                    <font-awesome-icon icon="trash-alt"></font-awesome-icon>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
    import {
        baseApiUrl, showError
    }
    from '@/global'
    import axios from 'axios'

    export default {
        name: 'UserAdmin',
        data: function() {
            return {
                user: {
                    nm_usuario: '',
                    nm_email: '',
                    nm_senha: '',
                    nr_cpf: '',
                },
                mode: 'save',
                users: [],
                fields: [{
                    key: 'cd_usuario',
                    label: 'Código',
                    sortable: true
                }, {
                    key: 'nm_usuario',
                    label: 'Nome',
                    sortable: true
                }, {
                    key: 'nm_email',
                    label: 'E-mail',
                    sortable: true
                }, {
                    key: 'nm_usuario',
                    label: 'Administrador',
                    sortable: true,
                    formatter: value => value ? 'Sim' : 'Não'
                }, {
                    key: 'actions',
                    label: 'Ações'
                }]
            }
        },
        methods: {
            loadUsers() {
                    const url = `${baseApiUrl}/api/usuarios`
                    axios.get(url).then(res => {
                        this.users = res.data
                    })
                },
                reset() {
                    this.mode = 'save'
                    this.user = {}
                    this.loadUsers()
                },
                save() {
                    const method = this.user.cd_usuario ? 'put' : 'post'
                    const cd_usuario = this.user.cd_usuario ? `${this.user.cd_usuario}` : ''
                    axios[method](`${baseApiUrl}/api/usuario/${cd_usuario}`, this.user)
                        .then(() => {
                            this.$toasted.global.defaultSuccess()
                            this.reset()
                        })
                        .catch(showError)
                },
                remove() {
                    const cd_usuario = this.user.cd_usuario
                    axios.delete(`${baseApiUrl}/api/usuario/${cd_usuario}`)
                        .then(() => {
                            this.$toasted.global.defaultSuccess()
                            this.reset()
                        })
                        .catch(showError)
                },
                loadUser(user, mode = 'save') {
                    this.mode = mode
                    this.user = {...user
                    }
                }
        },
        mounted() {
            this.loadUsers()
        }
    }
</script>

<style>

</style>