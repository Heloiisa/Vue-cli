<template>
    <div class="content">
        <b-row>
            <b-col cols="12">
                <router-view></router-view>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Content'
    }
</script>

<style>
    .content {
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
    }
</style>