<template>
    <div>
        <b-form-group label-cols-sm="1" label="String:" label-align-sm="left" label-for="nested-street">
            <b-form-input id="nested-street Left"></b-form-input>
        </b-form-group>
        <b-form-group label-cols-sm="1" label="Chave:" label-align-sm="left" label-for="chave">
            <b-form-input id="chave "></b-form-input>
        </b-form-group>
        <div>
            <b-row>
                <b-col md="11" offset-md="1">
                    <b-form-select v-model="selected" class="mb-3">
                        <option :value="null">Selecione...</option>
                        <option value="a">Codificar</option>
                        <option value="b">Decodificar</option>
                    </b-form-select>
                </b-col>
            </b-row>
        </div>
        <div class="text-sm-right col-sm3">
            <b-button variant="primary">Enviar</b-button>
        </div>
        <hr>
        <b-table hover striped :items="users" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadUser(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadUser(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="limit" />
    </div>
</template>

<script>
    import {
        baseApiUrl, showError
    }
    from '@/global'
    import axios from 'axios'

    export default {
        data() {
                return {
                    selected: null,
                    mode: 'save',
                    user: {},
                    users: [],
                    fields: [{
                        key: 'id',
                        label: 'Código',
                        sortable: true
                    }, {
                        key: 'string',
                        label: 'String',
                        sortable: true
                    }, {
                        key: 'chave',
                        label: 'Chave',
                        sortable: true
                    }, {
                        key: 'decode',
                        label: 'Decode',
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
                        const url = `${baseApiUrl}/users`
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
                        const method = this.user.id ? 'put' : 'post'
                        const id = this.user.id ? `/${this.user.id}` : ''
                        axios[method](`${baseApiUrl}/users${id}`, this.user)
                            .then(() => {
                                this.$toasted.global.defaultSuccess()
                                this.reset()
                            })
                            .catch(showError)
                    },
                    remove() {
                        const id = this.user.id
                        axios.delete(`${baseApiUrl}/users/${id}`)
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
            watch: {
                page() {
                    this.loadArticles()
                }
            },
            mounted() {
                this.loadUsers()
                this.loadCategories()
                this.loadArticles()
            }
    }
</script>

<style>

</style>