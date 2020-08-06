<template>

        <v-app>
            <div>
        <v-app-bar color="primary" dark>
            <v-icon left>mdi-twitter</v-icon>
            <v-toolbar-title class="">Twitter</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn class="mr-2" color="white"  text>
                    <v-icon left red>mdi-home</v-icon>
                    Home
                </v-btn>
                <v-btn class="mr-2" color="white"  text>
                    <v-icon left red>mdi-account-group</v-icon>
                    Users
                </v-btn>
                <v-btn class="mr-2" color="white"  text>
                    <v-icon left red >mdi-youtube-tv</v-icon>
                    Media
                </v-btn>
                <v-menu offset-y open-on-hover scale>
                    <template v-slot:activator="{on,attrs}" >
                        <v-btn
                        color="white"
                        v-bind="attrs"
                        v-on="on"
                        dark
                        text
                        >
                            Ameer Hamza
                            <v-icon right small>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item link to="#">
                            <v-list-item-title>Profile</v-list-item-title>
                        </v-list-item>
                        <v-list-item link to="#">
                            <v-list-item-title>Settings</v-list-item-title>
                        </v-list-item>
                        <v-list-item link to="#">
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-app-bar>
        </div>
            <v-main>
                <v-container fluid>
                    <v-row>
                        <v-col md="3" class="action-side">
                            <v-btn text class="pl-12">
                                <v-icon color="primary" large>mdi-twitter</v-icon>
                            </v-btn>
                            <v-list class="mt-3">
                                <v-list-item class="mb-2 pl-12" to="#">
                                    <v-icon left medium >mdi-home-outline</v-icon>
                                    <v-list-item-title class="text-h6 font-weight-bold">Home</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="mb-2 pl-12" to="#">
                                    <v-icon left medium >mdi-pound</v-icon>
                                    <v-list-item-title class="text-h6  font-weight-bold">Explore</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="mb-2 pl-12" to="#">
                                    <v-icon left medium >mdi-bell-outline</v-icon>
                                    <v-list-item-title class="text-h6  font-weight-bold">Notifications</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="mb-2 pl-12" to="#">
                                    <v-icon left medium >mdi-email-outline</v-icon>
                                    <v-list-item-title class="text-h6  font-weight-bold">Messages</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="mb-2 pl-12" to="#">
                                    <v-icon left medium >mdi-bookmark-outline</v-icon>
                                    <v-list-item-title class="text-h6  font-weight-bold">Bookmarks</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="mb-2 pl-12" to="#">
                                    <v-icon left medium >mdi-format-list-text</v-icon>
                                    <v-list-item-title class="text-h6  font-weight-bold">Lists</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="mb-2 pl-12" to="#">
                                    <v-icon left medium >mdi-face-profile</v-icon>
                                    <v-list-item-title class="text-h6  font-weight-bold">Profile</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="mb-2 pl-12" to="#">
                                    <v-icon left medium >mdi-dots-horizontal-circle-outline</v-icon>
                                    <v-list-item-title class="text-h6  font-weight-bold">More</v-list-item-title>
                                </v-list-item>
                                <v-btn color="primary" class="rounded" block>
                                    Tweet
                                </v-btn>
                            </v-list>
                        </v-col>
                        <v-col md="5">home</v-col>
                        <v-col md="4">trends</v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-app>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
<style scoped>
    .action-side{
        overflow-y:scroll;
    }
</style>
