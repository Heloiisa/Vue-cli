<template>
    <aside class="menu" v-show="isMenuVisible">
      <b-list-group>
            <b-list-group-item class="menu"  button > <h4 class="branco" >Heloisa Silva</h4><small class="branco"> heloisa.silva@cartoriosdeprotesto.org.br</small></b-list-group-item>
            <b-list-group-item class="menu" variant="light" button href="#"><font-awesome-icon icon="tachometer-alt"></font-awesome-icon>  Painel de Controle</b-list-group-item>
            <b-list-group-item class="menu" variant="light" button href="#"><font-awesome-icon icon="user-cog"></font-awesome-icon>  Administração</b-list-group-item>
            <b-list-group-item class="menu" variant="light" button href="#"><font-awesome-icon icon="comments"></font-awesome-icon>  Comunicados</b-list-group-item>
            <b-list-group-item class="menu" variant="light" button href="#"><font-awesome-icon icon="address-book"></font-awesome-icon>  Teste</b-list-group-item>
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

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .menu a,
    .menu a:hover {
        color: #fff;
        text-decoration: none;
    }

    .menu .tree-node.selected > .tree-content,
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
   
</style>
