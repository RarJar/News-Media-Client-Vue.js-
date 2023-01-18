import axios from 'axios'
import { mapGetters } from 'vuex';

export default {
    name: "ContactView",
    data() {
        return {
            inputData: {
                name: '',
                email: '',
                message: ''
            },
            inputVali: {
                name: false,
                email: false,
                message: false
            }
        }
    },
    methods: {
        getLoadStorageData() {
            if (localStorage.getItem('Token') != "") {
                // If data from VueX equal NULL, Add localStorage_Data to VueX
                if (this.getToken == "") {
                    this.$store.dispatch('saveToken', localStorage.getItem('Token'))
                }

                // // If data from VueX equal NULL, Add localStorage_Data to VueX
                if (this.getUserData == "") {
                    let data = localStorage.getItem('UserData');
                    this.$store.dispatch('saveUserData', JSON.parse(data))
                }
            }
        },
        sendBtn() {
            // Check Validation
            this.inputVali.name = this.inputData.name == '' ? true : false;
            this.inputVali.email = this.inputData.email == '' ? true : false;
            this.inputVali.message = this.inputData.message == '' ? true : false;

            let inputData = {
                name: this.inputData.name,
                email: this.inputData.email,
                message: this.inputData.message
            }

            axios.post('http://127.0.0.1:8000/api/createContactMessage', inputData).then((response) => {
                if (response.data.status == 'success') {
                    this.inputData.name = ''
                    this.inputData.email = ''
                    this.inputData.message = ''

                    alert('success');
                }
            });
        }
    },
    mounted() {
        this.getLoadStorageData();
    },
    computed: {
        ...mapGetters(['getUserData', 'getToken'])
    }
}