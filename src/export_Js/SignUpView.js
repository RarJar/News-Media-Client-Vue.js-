import axios from 'axios'
export default {
    name: 'SignUpView',
    data() {
        return {
            userInput: {
                name: '',
                email: '',
                password: ''
            },
            validationStatus: {
                nameValidation: false,
                emailValidation: false,
                passValidation: false,
            }
        }
    },
    methods: {
        signUpBtn() {
            axios.post('http://127.0.0.1:8000/api/userRegister', this.userInput).then((response) => {
                if (response.data.token != null) {
                    // Add Data to LocalStorage
                    localStorage.setItem('UserData', JSON.stringify(response.data.user))
                    localStorage.setItem('Token', response.data.token)

                    // Add localStorage_Data to VueX
                    let data = localStorage.getItem('UserData');
                    this.$store.dispatch('saveUserData', JSON.parse(data))
                    this.$store.dispatch('saveToken', localStorage.getItem('Token'))
                    this.$router.push('/EditProfileView');
                }
            });

            // Validation Status
            this.validationStatus.nameValidation = this.userInput.name == "" ? true : false;
            this.validationStatus.emailValidation = this.userInput.email == "" ? true : false;
            this.validationStatus.passValidation = this.userInput.password == "" ? true : false;
        }
    }
}