<template>
    <aside class="menu" v-show="isMenuVisible">
      <b-list-group>
            <b-list-group-item class="menu"  button > <h4 class="branco" >Heloisa Silva</h4><small class="branco"> heloisa.silva@cartoriosdeprotesto.org.br</small></b-list-group-item>
            <a href="/home" class="menu" variant="light" button ><font-awesome-icon icon="home"></font-awesome-icon>  Painel de Controle</a>
            <a href="#" class="menu" variant="light" button @click='toggle = !toggle'><font-awesome-icon icon="user-cog"></font-awesome-icon>  Administração <font-awesome-icon class="float-right" icon="angle-down"></font-awesome-icon></a>
                <b-list-group v-show='toggle' class="">
                    <b-list-group-item href="/empresas">Cadastro de Empresas</b-list-group-item>
                    <b-list-group-item href="/usuarios">Cadastro de Usuários</b-list-group-item>
                    <b-list-group-item href="/novogrupo">Grupo de Acesso</b-list-group-item>
                    <b-list-group-item href="/evento">Eventos</b-list-group-item>
                    <b-list-group-item href="/config">Configurações</b-list-group-item>
                </b-list-group>
            <a href="/comunicado" class="menu" variant="light" button ><font-awesome-icon icon="comments"></font-awesome-icon>  Comunicados</a>
            <a href="/decode" class="menu" variant="light" button><font-awesome-icon icon="database"></font-awesome-icon>  Decode</a>

    </b-list-group>
        <Tree :data="treeData" :options="treeOptions"
            :filter="treeFilter" ref="tree" />
    </aside>
</template>

<script>
import { mapState } from 'vuex'
import Tree from 'liquor-tree'
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'Menu',
    components: { Tree },
    computed: mapState(['isMenuVisible']),
    data: function() {
        return {
           toggle: false,
            treeFilter: '',
            treeData: this.getTreeData(),
            treeOptions: {
                propertyNames: { 'text': 'name' },
                filter: { emptyText: 'Categoria não encontrada' }
            }
        }
    },
    methods: {
        getTreeData() {
            const url = `${baseApiUrl}/categories/tree`
            return axios.get(url).then(res => res.data)
        },
        onNodeSelect(node) {
            this.$router.push({
                name: 'articlesByCategory',
                params: { id: node.id }
            })

            if(this.$mq === 'xs' || this.$mq === 'sm') {
                this.$store.commit('toggleMenu', false)
            }
        }
    },
    mounted() {
        this.$refs.tree.$on('node:selected', this.onNodeSelect)
    }
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);
        display: block;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .menu a,
    .menu a:hover {
        color: #fff;
        text-decoration: none;
        background: linear-gradient(to right, #232526, #414345);
    }
    .menu .tree-node.selected > .tree-content .b-list-group-item,
    .menu .tree-node .tree-content:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    .tree-arrow.has-child {
        filter: brightness(2);
    }
    .menu .menu-filter {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding-bottom: 8px;
        border-bottom: 1px solid #AAA;
    }
    .menu .menu-filter i {
        color: #AAA;
        margin-right: 10px;
    }
    .menu input {
        color: #CCC;
        font-size: 1.3rem;
        border: 0;
        outline: 0;
        width: 100%;
        background: transparent;
    }
    .tree-filter-empty {
        color: #CCC;
        font-size: 1.3rem;
        margin-left: 20px;
    }
    .svg-inline--fa{
        color:white;
    }
    .branco{
        color: white;
    }
    a {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    }
    
 
</style>
