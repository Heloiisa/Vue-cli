<template>
    <div class="comunicado-admin">
        <b-form>
            <input id="article-id" type="hidden" v-model="article.cd_sistema_comunicado" />
            <b-form-group label="Titulo:" label-for="article-titulo">
                <b-form-input id="article-titulo" type="text" v-model="article.nm_titulo" required :readonly="mode === 'remove'" placeholder="Informe o Título..." />
            </b-form-group>
            <b-form-group label="Empresa:" label-for="article-categoryId">
                <b-form-select id="article-categoryId" :options="options" v-model="selected" />
            </b-form-group>
            <b-row>
                <b-col sm="6">
                    <b-form-group label="Periodo Inicial:" label-for="article-inicial">
                        <b-form-input id="article-inicial" type="date" v-model="article.dt_inicio" required />
                    </b-form-group>
                </b-col>
                <b-col sm="6">
                    <b-form-group label="Periodo Final:" label-for="article-final">
                        <b-form-input id="article-final" type="date" v-model="article.dt_fim" required/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-form-group v-if="mode === 'save'" label="Conteúdo" label-for="article-content">
                <VueEditor v-model="article.ds_comunicado" placeholder="Informe o Conteúdo..." />
            </b-form-group>
            <div class="text-sm-right col-sm3">
                <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
                <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
                <b-button class="ml-2" @click="reset">Cancelar</b-button>
            </div>
        </b-form>
        <hr>
        <b-table hover striped :items="articles" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadArticle(data.item)" class="mr-2">
                    <font-awesome-icon icon="pencil-alt" ></font-awesome-icon>
                </b-button>
                <b-button variant="danger" @click="loadArticle(data.item, 'remove')">
                     <font-awesome-icon icon="trash-alt" ></font-awesome-icon>
                </b-button>
            </template>
        </b-table>
        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="limit" />
    </div>
</template>

<script>
    import {
        VueEditor
    }
    from "vue2-editor"
    import {
        baseApiUrl, showError
    }
    from '@/global'
    import axios from 'axios'

    export default {
        name: 'ComunicadoAdmin',
        components: {
            VueEditor
        },
        data: function() {
            return {
                article: {
                    nm_titulo: "",
                    dt_inicio: "",
                    dt_fim: "",
                    ds_comunicado: ""
                },
        selected: null,
        options: [
          { value: null, text: 'Selecione uma empresa' },
          { value: '1', text: 'CRA NACIONAL' },
          { value: '2', text: 'Empresa Qualquer ab' },

        ],
        
                mode: 'save',
                articles: [],
                categories: [],
                users: [],
                page: 1,
                limit: 0,
                count: 0,
                fields: [{
                    key: 'cd_sistema_comunicado',
                    label: 'Código',
                    sortable: true
                }, {
                    key: 'nm_titulo',
                    label: 'Título',
                    sortable: true
                }, {
                    key: 'dt_inicio',
                    label: 'Data Inicio',
                    sortable: true
                },
                {
                    key: 'dt_fim',
                    label: 'Data Final',
                    sortable: true
                }, {
                    key: 'actions',
                    label: 'Ações'
                }]
            }
        },
        methods: {
            loadArticles() {
                    var self = this;
                    const url = `${baseApiUrl}/api/comunicados`
                    axios.get(url).then(res => {
                        self.articles = res.data;
                    })
                },
                reset() {
                    this.mode = 'save'
                    this.article = {}
                    this.loadArticles()
                },
                save() {
                    const method = this.article.cd_sistema_comunicado ? 'put' : 'post'
                    const cd_sistema_comunicado = this.article.cd_sistema_comunicado
                     ? `${this.article.cd_sistema_comunicado}` : '';
                    axios[method](`${baseApiUrl}/api/comunicado/${cd_sistema_comunicado}`, this.article)
                        .then(() => {
                            this.$toasted.global.defaultSuccess()
                            this.reset()
                        })
                        .catch(showError)
                },
                remove() {
                    const cd_sistema_comunicado = this.article.cd_sistema_comunicado
                    axios.delete(`${baseApiUrl}/api/comunicado/${cd_sistema_comunicado}`)
                        .then(() => {
                            this.$toasted.global.defaultSuccess()
                            this.reset()
                        })
                        .catch(showError)
                },
                loadArticle(article, mode = 'save') {
                    this.mode = mode;
                    this.article = { ...article };
                },
                loadCategories() {
                    const url = `${baseApiUrl}/api/empresas`
                    axios.get(url).then(res => {
                        this.categories = res.data.map(category => {
                            return {
                                value: category.cd_empresa_pertence,
                                text: category.path
                            }
                        })
                    })
                },
                loadUsers() {
                    const url = `${baseApiUrl}/api/usuarios`
                    axios.get(url).then(res => {
                        this.users = res.data.map(user => {
                            return {
                                value: user.cd_usuario,
                                text: `${user.nm_usuario} - ${user.nm_email}`
                            }
                        })
                    })
        },
    //   watch: {
    //       page() {
    //           this.loadArticles()
    //        }
    //    },
        mounted() {
            this.loadUsers()
            this.loadCategories()
            this.loadArticles()
        }
    }
    };
    
</script>

<style>

</style>