<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
          <font-awesome-icon icon="bars"></font-awesome-icon>
        </a>
        <h1 class="title">
            <router-link to="/">{{ title }}</router-link>
        </h1>
        <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex text-white">
            <li class="nav-item">
                <a class="nav-link"><p>Último acesso: 12:23</p></a>
            </li>
            <li class="nav-item px-2" >
                <a class="nav-link"><font-awesome-icon icon="star"></font-awesome-icon></a>
            </li>
            <li class="nav-item px-2">
                <a class="nav-link"><font-awesome-icon icon="user"></font-awesome-icon></a>
            </li>
            <li class="nav-item px-2">
                <a class="nav-link"><font-awesome-icon icon="user-circle"></font-awesome-icon></a>
            </li>
            <li class="nav-item">
                <a class="nav-link"> <UserDropdown v-if="!hideUserDropdown" /></a>
            </li>
        </ul>
    </header>
</template>

<script>
import UserDropdown from './UserDropdown'

export default {
    name: 'Header',
    components: { UserDropdown },
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed: {
        icon() {
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a {
        color: #FFF;
        text-decoration: none;
    }

    .title a:hover {
        color: #FFF;
        text-decoration: none;
    }

    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color: #fff;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
