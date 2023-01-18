import { mapGetters } from "vuex";
import axios from 'axios';

export default {
    name: 'App',
    data() {
        return {
            inputData: {
                oldPass: "",
                newPass: "",
                comfirm: ""
            },
            inputVali: {
                oldMatch: false,
                oldPass: false,
                newPass: false,
                comfirm: false,
                passMatch: false
            }
        }
    },
    methods: {
        logout() {
            // Add Clear Data to LocalStorage
            localStorage.setItem('UserData', "")
            localStorage.setItem('Token', "")

            // Add localStorage_Data to VueX
            this.$store.dispatch('saveUserData', localStorage.getItem('UserData'))
            this.$store.dispatch('saveToken', localStorage.getItem('Token'))
            this.$router.push('/');
        },
        changePass() {
            let passData = {
                userId: this.getUserData.id,
                oldPass: this.inputData.oldPass,
                newPass: this.inputData.newPass,
                comfirm: this.inputData.comfirm
            }
            axios
                .post("http://127.0.0.1:8000/api/changePassword", passData)
                .then((response) => {
                    console.log(response.data.status);

                    if (response.data.status == 'success') {
                        location.reload();
                        this.logout();
                    }
                    if (response.data.status == 'notSame') {
                        this.inputVali.oldMatch = true
                    }
                });

            // Check Validation
            this.inputVali.oldPass = this.inputData.oldPass == '' ? true : false;
            this.inputVali.newPass = this.inputData.newPass == '' ? true : false;
            this.inputVali.comfirm = this.inputData.comfirm == '' ? true : false;
            this.inputVali.passMatch = (this.inputData.newPass != this.inputData.comfirm) ? true : false;
        }
    },
    computed: {
        ...mapGetters(['getUserData', 'getToken'])
    }
}