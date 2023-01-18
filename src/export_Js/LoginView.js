import axios from "axios"

export default {
    name: 'LoginView',
    data() {
        return {
            userData: {
                'email': '',
                'password': ''
            },
            validationStatus: {
                emailValidation: false,
                passValidation: false,
            }
        }
    },
    methods: {
        loginBtn() {
            axios
                .post('http://127.0.0.1:8000/api/userLogin', this.userData)
                .then((response) => {
                    if (response.data.token != null) {
                        // Add Data to LocalStorage
                        localStorage.setItem('UserData', JSON.stringify(response.data.user))
                        localStorage.setItem('Token', response.data.token)

                        // Add localStorage_Data to VueX
                        let data = localStorage.getItem('UserData');
                        this.$store.dispatch('saveUserData', JSON.parse(data))
                        this.$store.dispatch('saveToken', localStorage.getItem('Token'))
                        this.$router.push('/');
                    }
                });

            // Validation Status
            this.validationStatus.emailValidation = this.userData.email == "" ? true : false;
            this.validationStatus.passValidation = this.userData.password == "" ? true : false;
        }
    }
}