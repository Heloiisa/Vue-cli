<template>
    <div class="admin-empresa">
        <PageTitle icon="fa fa-cogs" main="Administração do Sistema" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab b title="Cadastro de Empresas">
                        <EmpresaAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import EmpresaAdmin from './EmpresaAdmin'

export default {
    name: 'AdminEmpresa',
    components: { PageTitle, EmpresaAdmin}
}
</script>

<style>

</style>
