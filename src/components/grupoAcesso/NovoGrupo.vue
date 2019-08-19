<template>
    <div>
        <h6>Para adicionar um novo grupo, informe um nome para este grupo e selecione as permissões de acesso:</h6>
        <b-form-group label-cols-sm="1" label="Nome do Grupo:" label-align-sm="left" label-for="nested-street">
            <b-form-input id="nested-street Left"></b-form-input>
        </b-form-group>
        <h6>Selecione as seções (menus) dos módulos que os usuários pertencentes a este grupo poderão utilizar:</h6>
        <b-row>
            <b-col sm="3">
                <div>
                    <b-card no-body>
                        <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
                            <b-nav-item>Administração</b-nav-item>
                        </b-nav>
                        <b-card-body id="nav-scroller" ref="content" style="position:relative; height:300px; overflow-y:scroll;">
                            <div>
                                <b-form-group>
                                    <template slot="label">
                                        <b-form-checkbox v-model="allSelected" :indeterminate="indeterminate" aria-describedby="flavours" aria-controls="flavours" @change="toggleAll">
                                            {{ allSelected ? 'Usuários' : 'Usuários' }} {{ allSelected ? 'Novo Grupo' : 'Novo Grupo' }}
                                        </b-form-checkbox>
                                    </template>
                                    <b-form-checkbox-group id="flavors" v-model="selected" :options="flavours" name="flavors" class="ml-4" aria-label="Individual flavours" stacked></b-form-checkbox-group>
                                </b-form-group>
                            </div>
                        </b-card-body>
                    </b-card>
                </div>
            </b-col>
            <b-col sm="3">
                <div>
                    <b-card no-body>
                        <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
                            <b-nav-item>Comunicados</b-nav-item>
                        </b-nav>
                        <b-card-body id="nav-scroller" ref="content" style="position:relative; height:300px; overflow-y:scroll;">
                            <b-form-group>
                                <b-form-checkbox-group v-model="selected" :options="options" name="flavour-2a" stacked></b-form-checkbox-group>
                            </b-form-group>
                        </b-card-body>
                    </b-card>
                </div>
            </b-col>
            <b-col sm="3">
                <div>
                    <b-card no-body>
                        <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
                            <b-nav-item>Teste</b-nav-item>
                        </b-nav>

                        <b-card-body id="nav-scroller" ref="content" style="position:relative; height:300px; overflow-y:scroll;">
                            <p>{{ text }}</p>
                        </b-card-body>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
                return {
                    text: '',
                    flavours: ['Novo Usuário', 'Pesquisar Usuários'],
                    novogrupo: ['Novo Grupo', 'Editar'],
                    selected: [],
                    allSelected: false,
                    indeterminate: false,
                    options: [{
                        text: 'Cadastrar',
                        value: 'cad'
                    }, {
                        text: 'Editar',
                        value: 'edit'
                    }, ]
                }
            },
            methods: {
                toggleAll(checked) {
                        this.selected = checked ? this.flavours.slice() : []
                    },

            }
    }
</script>

<style>

</style>