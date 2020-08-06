<template>
    <div>
        <v-app-bar dark color="primary">
            <v-icon left>mdi-twitter</v-icon>
            <v-toolbar-title>Twitter</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn text color="white" to="/login">
                    <v-icon left color="white">mdi-login</v-icon>
                    Login</v-btn>
                <v-btn text color="white" to="/register">
                    <v-icon left color="white">mdi-account-plus</v-icon>
                    Register</v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>
<script>
    export default {
        name:'toolbar',
    }
</script>
