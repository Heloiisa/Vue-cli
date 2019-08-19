<template>
    <div class="home">
        <PageTitle icon="fa fa-home " main="Dashboard" />
        <div>
            <b-row>
                <b-col cols="12" md="6" xl="3" class="mt-2">
                    <b-card-group deck>
                        <b-card variant="danger" header="REMESSA" header-tag="header" id="btn-remessa" footer="Saiba mais... " footer-tag="footer" footer-bg-variant="blue">
                            <b-row>
                                <b-col cols="8">
                                    <b-card-text>
                                        <font-awesome-icon icon="paper-plane" size="2x"></font-awesome-icon>
                                    </b-card-text>
                                </b-col>
                                <b-col cols="4">
                                    <h3 class="center text-light"><b>10</b></h3>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col cols="12" md="6" xl="3" class="mt-2">
                    <b-card-group deck>
                        <b-card header="RETORNO" header-tag="header" id="btn-retorno" footer="Saiba mais..." footer-tag="footer">
                            <b-row>
                                <b-col cols="8">
                                    <b-card-text>
                                        <font-awesome-icon icon="reply" size="2x"></font-awesome-icon>
                                    </b-card-text>
                                </b-col>
                                <b-col cols="4">
                                    <h3 class="center text-light"><b>11</b></h3>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col cols="12" md="6" xl="3" class="mt-2">
                    <b-card-group deck>
                        <b-card header="CONFIRMAÇÃO" header-tag="header" id="btn-confirmacao" footer="Saiba mais..." footer-tag="footer">
                            <b-row>
                                <b-col cols="8">
                                    <b-card-text>
                                        <font-awesome-icon icon="check-square" size="2x"></font-awesome-icon>
                                    </b-card-text>
                                </b-col>
                                <b-col cols="4">
                                    <h3 class="center text-light"><b>12</b></h3>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col cols="12" md="6" xl="3" class="mt-2">
                    <b-card-group deck>
                        <b-card header="DESISTÊNCIA" header-tag="header" id="btn-desistencia" footer="Saiba mais..." footer-tag="footer">
                            <b-row>
                                <b-col cols="8">
                                    <b-card-text>
                                        <font-awesome-icon icon="window-close" size="2x"></font-awesome-icon>
                                    </b-card-text>
                                </b-col>
                                <b-col cols="4">
                                    <h3 class="center text-light"><b>13</b></h3>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
            <br>
            <!--Comunicados -->
            <b-row>
                <b-col cols="12" md="6">
                    <b-card-group deck>
                        <b-card header="Comunicados" header-tag="header" title="Title">
                            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non sem sit amet augue fringilla dignissim. Donec congue metus in dictum molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque convallis leo egestas tincidunt luctus. Praesent ut neque neque. Sed nec posuere odio. Aenean vel nisl a libero molestie consectetur. Phasellus nec sagittis enim. Nullam fringilla nisl vitae tortor ornare venenatis. Aliquam feugiat ullamcorper eros a facilisis. Sed vestibulum nunc ut lectus consequat malesuada. Etiam aliquam arcu at sodales semper. Nullam sagittis efficitur tortor in vehicula. Maecenas varius erat non risus ultrices dictum. Ut a metus ac neque vehicula mattis. Nunc varius tristique facilisis. Nullam luctus auctor nisi, quis tristique mauris congue sed. Praesent fermentum turpis id egestas facilisis. Integer euismod tortor nec eros porta, ac rutrum magna lobortis. Aliquam maximus iaculis dapibus. Donec sollicitudin ligula et mauris egestas porttitor. Sed sit amet tincidunt nisi. Mauris tincidunt feugiat hendrerit. Phasellus est erat, pharetra non sapien sed, facilisis consectetur ex. Duis accumsan libero neque, in gravida enim porttitor pretium.</b-card-text>
                        </b-card>
                    </b-card-group>
                </b-col>
                <b-col cols="12" md="6">
                    <b-card-group deck>
                        <b-card header="Requisitos Desejáveis" header-tag="header" title="Title">
                            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non sem sit amet augue fringilla dignissim. Donec congue metus in dictum molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque convallis leo egestas tincidunt luctus. Praesent ut neque neque. Sed nec posuere odio. Aenean vel nisl a libero molestie consectetur. Phasellus nec sagittis enim. Nullam fringilla nisl vitae tortor ornare venenatis. Aliquam feugiat ullamcorper eros a facilisis. Sed vestibulum nunc ut lectus consequat malesuada. Etiam aliquam arcu at sodales semper. Nullam sagittis efficitur tortor in vehicula. Maecenas varius erat non risus ultrices dictum. Ut a metus ac neque vehicula mattis. Nunc varius tristique facilisis. Nullam luctus auctor nisi, quis tristique mauris congue sed. Praesent fermentum turpis id egestas facilisis. Integer euismod tortor nec eros porta, ac rutrum magna lobortis. Aliquam maximus iaculis dapibus. Donec sollicitudin ligula et mauris egestas porttitor. Sed sit amet tincidunt nisi. Mauris tincidunt feugiat hendrerit. Phasellus est erat, pharetra non sapien sed, facilisis consectetur ex. Duis accumsan libero neque, in gravida enim porttitor pretium.</b-card-text>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col cols="12" md="12">
                    <b-card-group deck>
                        <b-card header="Favoritos" header-tag="header">
                            <b-card-text>Ut a metus ac neque vehicula mattis. Nunc varius tristique facilisis. Nullam luctus auctor nisi, quis tristique mauris congue sed. Praesent fermentum turpis id egestas facilisis. Integer euismod tortor nec eros porta, ac rutrum magna lobortis. Aliquam maximus iaculis dapibus. Donec sollicitudin ligula et mauris egestas porttitor. Sed sit amet tincidunt nisi. Mauris tincidunt feugiat hendrerit. Phasellus est erat, pharetra non sapien sed, facilisis consectetur ex. Duis accumsan libero neque, in gravida enim porttitor pretium.</b-card-text>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>

        </div>
    </div>
</template>

<script>
    import PageTitle from '../template/PageTitle'
    import Stat from './Stat'
    import axios from 'axios'
    import {
        baseApiUrl
    }
    from '@/global'

    export default {
        name: 'Home',
        components: {
            PageTitle, Stat
        },
        data: function() {
            return {
                stat: {}
            }
        },
        methods: {
            getStats() {
                axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
            }
        },
        mounted() {
            this.getStats()
        }
    }
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    #btn-remessa {
        background-color: #1E91CF;
    }
    
    #btn-retorno {
        background-color: #dc3545;
    }
    
    #btn-confirmacao {
        background-color: #fbce31;
    }
    
    #btn-desistencia {
        background-color: #6db254;
    }
</style>