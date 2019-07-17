<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração do Sistema" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab b title="Cadastro de Empresas">
                        <EmpresaAdmin />
                    </b-tab>
                    <b-tab title="Cadastro de Usuários">
                        <UsuarioAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import EmpresaAdmin from './EmpresaAdmin'
import UsuarioAdmin from './UsuarioAdmin'


export default {
    name: 'AdminPages',
    components: { PageTitle, EmpresaAdmin, UsuarioAdmin }
}
</script>

<style>

</style>
