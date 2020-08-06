<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col md="6" offset-md="3" justify="center" align="center">
                    <v-card rounded>
                        <v-card-title class="text-center">Account Information</v-card-title>
                        <v-text-field type="email" class="mx-8 my-5" label="Email/username"></v-text-field>
                        <v-text-field type="password" class="mx-8 my-5" label="Password"></v-text-field>
                        <v-btn color="primary" class="mb-5">
                            <v-icon left color="white" >mdi-login</v-icon>
                            Login
                        </v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
    export  default {

    }
</script>
<style scoped></style>
