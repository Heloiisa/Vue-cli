<template>
    <div class="CadEmpresa">
        <b-form>
            <input id="category-id" type="hidden" v-model="category.id" />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome da Empresa:" label-for="idNomeEmpresa">
                        <b-form-input id="idNomeEmpresa" type="text" v-model="nm_empresa" required :readonly="mode === 'remove'" placeholder="Informe o Nome da Empresa..." />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome Fantasia:" label-for="idEmpresaFantasia">
                        <b-form-input id="idEmpresaFantasia" type="text" v-model="nm_empresa_fantasia" :readonly="mode === 'remove'" placeholder="Informe o Nome Fantasia..." />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Tipo Empresa:" label-for="idEmpresaTipo">
                        <b-form-select v-if="mode === 'save'" id="idEmpresaTipo" :options="categories" v-model="category.parentId" />
                        <b-form-input v-else id="category-parentId" type="text" v-model="cd_empresa_tipo" readonly />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="CNPJ:" label-for="idDocumentoEmpresa">
                        <b-form-input id="idDocumentoEmpresa" type="text" v-model="nm_nr_cnpj" required :readonly="mode === 'remove'" placeholder="Informe o CNPJ da Empresa..." />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Email da Empresa:" label-for="idEmailEmpresa">
                        <b-form-input id="idEmailEmpresa" type="text" v-model="nm_email" required :readonly="mode === 'remove'" placeholder="Informe o Email da Empresa..." />
                    </b-form-group>
                </b-col>
                 <b-col md="1" sm="12">
                    <b-form-group label="DDD:" label-for="idTelefone">
                        <b-form-input id="idTelefone" type="text" v-model="nr_telefone" required :readonly="mode === 'remove'" placeholder="Inf. o DDD." />
                    </b-form-group>
                </b-col>
                <b-col md="5" sm="12">
                    <b-form-group label="Telefone:" label-for="idTelefone">
                        <b-form-input id="idDDD" type="text" v-model="nr_ddd_telefone" required :readonly="mode === 'remove'" placeholder="Informe o telefone..." />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome Representante:" label-for="idNomeRepresentante">
                        <b-form-input id="idNomeRepresentante" type="text" v-model="category.representante" required :readonly="mode === 'remove'" placeholder="Informe o nome do Representante..." />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="CPF Representante:" label-for="idDocumentoRepresentante">
                        <b-form-input id="idDocumentoRepresentante" type="text" v-model="category.cpfrepresentante" required :readonly="mode === 'remove'" placeholder="Informe o telefone..." />
                    </b-form-group>
                </b-col>
            </b-row>
            <div class="text-sm-right col-sm3">
                <b-button variant="primary" @click="save">Salvar</b-button>
                <b-button class="ml-2" @click="reset">Cancelar</b-button>
            </div>
        </b-form>
        <hr>
        <b-table hover striped :items="categories" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2">
                     <font-awesome-icon icon="pencil-alt" ></font-awesome-icon>
                </b-button>
                <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
                     <font-awesome-icon icon="trash-alt" ></font-awesome-icon>
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
        name: 'CadEmpresa',
        data: function() {
            return {
                nm_empresa: '',
                nm_empresa_fantasia:'',
                cd_empresa_tipo:'',
                nm_nr_cnpj:'',
                nm_email: '',
                nr_telefone:'',
                nr_ddd_telefone:'',
                mode: 'save',
                category: {},
                categories: [],
                fields: [{
                    key: 'cd_empresa',
                    label: 'Código',
                    sortable: true
                }, 
                   {
                    key: 'nm_nr_cnpj',
                    label: 'CNPJ',
                    sortable: true
                },
                {
                    key: 'nm_empresa',
                    label: 'Nome',
                    sortable: true
                }, {
                    key: 'nm_empresa_fantasia',
                    label: 'Nome fantasia',
                    sortable: true
                }, {
                    key: 'nm_email',
                    label: 'Email',
                    sortable: true
                },
                {
                    key: 'nr_ddd_telefone',
                    label: 'DDD',
                    sortable: true
                },
                 {
                    key: 'nr_telefone',
                    label: 'Telefone',
                    sortable: true
                }
                , {
                    key: 'actions',
                    label: 'Ações'
                }]
            }
        },
        methods: {
            loadCategories() {
                var self = this
                    const url = `${baseApiUrl}/api/empresas`
                    axios.get(url).then(res => {
                        self.categories = res.data
                    })
                },
                reset() {
                    this.mode = 'save'
                    this.category = {}
                    this.loadCategories()
                },
                save() {
                     var self = this
                    const method = this.category.cd_empresa ? 'put' : 'post'
                    const cd_empresa = this.category.cd_empresa ? `${this.category.cd_empresa}` : ''
                    axios.put(`${baseApiUrl}/api/empresa/${cd_empresa}`, this.category)
                        .then(() => {
                            this.global.defaultSuccess()
                            this.reset()
                        })
                        .catch(showError)
                },
                remove() {
                    var self = this
                    const cd_empresa = this.category.cd_empresa
                    axios.delete(`${baseApiUrl}/api/empresa/${cd_empresa}`)
                        .then(() => {
                            this.global.defaultSuccess()
                            this.reset()
                        })
                        .catch(showError)
                },
                loadCategory(category, mode = 'save') {
                    this.mode = mode
                    this.category = {...category
                    }
                }
        },
        mounted() {
            this.loadCategories()
        }
    }
</script>

<style>

</style>