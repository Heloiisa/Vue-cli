<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração - Configurações" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Informações Gerais">
                        <InforGerais />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
    import PageTitle from '../template/PageTitle'
    import InforGerais from './InforGerais'

    export default {
        name: 'InforAdmin',
        components: {
            PageTitle, InforGerais
        }
    }
</script>

<style>

</style>