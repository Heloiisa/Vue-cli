<template>
    <b-col cols="6" md="6" lg="12">
        <div class="admin-pages">
            <PageTitle icon="fa fa-cogs" main="Administração do Sistema" />
            <div class="admin-pages-tabs">
                <b-card no-body>
                    <b-tabs card>
                        <b-tab title="Cadastro de Usuários">
                            <UsuarioAdmin />
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div>
    </b-col>
</template>

<script>
    import PageTitle from '../template/PageTitle'
    import UsuarioAdmin from './UsuarioAdmin'

    export default {
        name: 'AdminPages',
        components: {
            PageTitle, UsuarioAdmin
        }
    }
</script>

<style>

</style>