import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
    name: 'EditProfileView',
    data() {
        return {
            myProfileImage: null,
            genderOption: {
                Choose: '',
                Male: 'M',
                Female: 'F'
            },
            inputData: {
                id: "",
                name: "",
                email: "",
                address: "",
                gender: ""
            },
            inputVali: {
                name: false,
                email: false,
                address: false,
                gender: false
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

                // If data from VueX equal NULL, Add localStorage_Data to VueX
                if (this.getUserData == "") {
                    let data = localStorage.getItem('UserData');
                    this.$store.dispatch('saveUserData', JSON.parse(data))
                }
            }
        },
        selectGender(event) {
            this.inputData.gender = event.target.value
        },

        updateProfile() {

            // Check Validation
            this.inputVali.name = this.inputData.name == '' ? true : false;
            this.inputVali.email = this.inputData.email == '' ? true : false;
            this.inputVali.address = this.inputData.address == '' ? true : false;
            this.inputVali.gender = this.inputData.gender == '' ? true : false;

            let userUpdateData = {
                userId: this.inputData.id,
                name: this.inputData.name,
                email: this.inputData.email,
                address: this.inputData.address,
                gender: this.inputData.gender
            }

            axios.post('http://127.0.0.1:8000/api/profileUpdate', userUpdateData).then((response) => {
                if (response.data.status == 'success') {
                    this.$router.push('/');
                }
            });
        }
    },
    computed: {
        ...mapGetters(['getUserData', 'getToken'])
    },
    mounted() {
        this.getLoadStorageData();

        axios.post('http://127.0.0.1:8000/api/getMyProfileData', { userId: this.getUserData.id })
            .then((response) => {

                this.myProfileImage = "http://127.0.0.1:8000/profileImage/" + response.data.user.image

                this.inputData.id = response.data.user.id;
                this.inputData.name = response.data.user.name;
                this.inputData.email = response.data.user.email;
                this.inputData.address = response.data.user.address;
                this.inputData.gender = response.data.user.gender;
            });
    }
}