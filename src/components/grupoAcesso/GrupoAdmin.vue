<template>
    <div class="grupo-admin">
        <PageTitle icon="fa fa-cogs" main="Administração - Eventos" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Novo Grupo" active>
                        <NovoGrupo />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import NovoGrupo from './NovoGrupo'


export default {
    name: 'EventoAdmin',
    components: { PageTitle, NovoGrupo }
}
</script>

<style>

</style>
