<template>
    <v-app>
        <Toolbar />
        <router-view></router-view>
    </v-app>
</template>
<script>
    import Toolbar from './components/Toolbar'
    export default {
        name:'app',
    data: () => ({}),
        components:{
        Toolbar
        }
    }
</script>
