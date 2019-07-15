<template>
    <div class="evento-admin">
        <PageTitle icon="fa fa-cogs" main="Administração - Comunicados" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Comunicados" active>
                        <Comunicado />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Comunicado from './Comunicado'


export default {
    name: 'ComunicadoAdmin',
    components: { PageTitle, Comunicado }
}
</script>

<style>

</style>
