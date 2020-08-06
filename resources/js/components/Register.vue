<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col md="6" offset-md="3" justify="center" align="center">
                    <v-card rounded>
                        <v-card-title class="text-center">Account Information</v-card-title>
                        <v-text-field type="email" class="mx-8 my-5" label="Email/username" v-model="email"></v-text-field>
                        <v-text-field type="text" class="mx-8 my-5" label="First Name" v-model="fname"></v-text-field>
                        <v-text-field type="text" class="mx-8 my-5" label="Last Name" v-model="lname"></v-text-field>
                        <v-text-field type="password" class="mx-8 my-5" label="Password" v-model="password"></v-text-field>
                        <v-text-field type="password" class="mx-8 my-5" label="Confirm Password" v-model="cpass"></v-text-field>
                        <v-btn color="primary" class="mb-5" @click="register">
                            <v-icon left color="white" >mdi-account-plus</v-icon>
                            Register
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
            fname:'',
            lname:'',
            password:'',
            cpass:'',
        }),
        methods:{
            register(){
                if(this.password === this.cpass){
                    axios.post('/api/user/register',{email:this.email,firstName:this.fname,lastName:this.lname,password:this.password})
                        .then(res => {
                            console.log(res.data);
                            this.$router.push('/login')
                        })
                        .catch(err => console.log("o ly error " + err.data ))
                }
                else
                {
                    console.log("Passwords do not match");
                }
            }
        }
    }
</script>
<style scoped></style>
