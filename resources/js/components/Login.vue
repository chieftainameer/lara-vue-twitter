<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col md="6" offset-md="3" justify="center" align="center">
                    <v-card rounded>
                        <v-card-title class="text-center">Account Information</v-card-title>
                        <v-text-field type="email" class="mx-8 my-5" label="Email/username" v-model="email"></v-text-field>
                        <v-text-field type="password" class="mx-8 my-5" label="Password" v-model="password"></v-text-field>
                        <v-btn color="primary" class="mb-5" @click="login">
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
    data:() => ({
        email:'',
        password:'',
    }),
        methods:{
        login(){
            axios.post('/api/user/login',{email:this.email,password:this.password})
            .then(res => {
                console.log(res.data);
                localStorage.setItem('ACCESS_TOKEN',res.data.access_token);
                this.$router.push('/home');
            })
            .catch(err => {
                console.log("error here " + err.data)
            })
        }
        }
    }
</script>
<style scoped></style>
