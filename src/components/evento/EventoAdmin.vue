<template>
    <div class="evento-admin">
        <PageTitle icon="fa fa-cogs" main="Administração - Eventos" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Eventos" active>
                        <Eventos />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
    import PageTitle from '../template/PageTitle'
    import Eventos from './Eventos'

    export default {
        name: 'EventoAdmin',
        components: {
            PageTitle, Eventos
        }
    }
</script>

<style>

</style>