import axios from 'axios'
import { mapGetters } from 'vuex';

export default {
    name: 'HomeView',
    data() {
        return {
            postList: {},
            countPosts: 0,
            searchKey: "",
            categoryList: {}
        }
    },
    methods: {
        // Get All Post
        getAllPost() {
            axios
                .get("http://127.0.0.1:8000/api/getAllPost")
                .then((response) => {
                    for (let i = 0; i < response.data.post.length; i++) {
                        response.data.post[i].image = "http://127.0.0.1:8000/postImage/" + response.data.post[i].image
                    }
                    this.postList = response.data.post
                    this.countPosts = response.data.post.length
                });
        },
        // Search Post
        search() {
            axios
                .post("http://127.0.0.1:8000/api/searchPost", { key: this.searchKey })
                .then((response) => {
                    console.log(response.data.searchData);
                    for (let i = 0; i < response.data.searchData.length; i++) {
                        response.data.searchData[i].image = "http://127.0.0.1:8000/postImage/" + response.data.searchData[i].image
                    }
                    this.postList = response.data.searchData
                    this.countPosts = response.data.searchData.length
                });
        },
        // View Post Details
        viewPostDetails(postId) {
            this.$router.push('/postDetails/' + postId);
        },

        // Get All Category
        getAllCategory() {
            axios
                .get("http://127.0.0.1:8000/api/getAllCategory")
                .then((response) => {
                    this.categoryList = response.data.category
                });
        },
        // SearchPost By Category
        search_ByCategory(event) {
            // alert(event.target.value);
            axios
                .post('http://127.0.0.1:8000/api/searchPostByCategory', { key: event.target.value })
                .then((response) => {
                    for (let i = 0; i < response.data.post.length; i++) {
                        response.data.post[i].image = "http://127.0.0.1:8000/postImage/" + response.data.post[i].image
                    }
                    this.postList = response.data.post
                    this.countPosts = response.data.post.length
                });
        },
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
        }
    },
    mounted() {
        this.getAllPost();
        this.getAllCategory();
        this.getLoadStorageData();
    },
    computed: {
        ...mapGetters(['getUserData', 'getToken'])
    }
}