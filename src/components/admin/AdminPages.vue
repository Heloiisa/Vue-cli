<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração do Sistema" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Cadastro de Empresas">
                        <CategoryAdmin />
                    </b-tab>
                    <b-tab title="Cadastro de Usuários">
                        <UserAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'


export default {
    name: 'AdminPages',
    components: { PageTitle, CategoryAdmin, UserAdmin }
}
</script>

<style>

</style>
