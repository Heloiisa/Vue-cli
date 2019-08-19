<template>
    <div class="decode-admin">
        <PageTitle icon="fa fa-cogs" main="Utilitários - Codificação" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Decode" active>
                        <Decode />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
    import PageTitle from '../template/PageTitle'
    import Decode from './Decode'

    export default {
        name: 'DecodeAdmin',
        components: {
            PageTitle, Decode
        }
    }
</script>

<style>

</style>