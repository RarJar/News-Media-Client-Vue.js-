import axios from 'axios'
import { mapGetters } from 'vuex';

export default {
    name: 'PostDetailsView',
    data() {
        return {
            postList: "",
            jsDateFormat: "",
            viewCount: 0,
            inputComment: "",
            commentList: "",
            commentImg: null,
            commentDateFormat: ""
        }
    },
    methods: {
        loadPost() {
            axios
                .post('http://127.0.0.1:8000/api/postDetails', { postId: this.$route.params.postId })
                .then((response) => {
                    // console.log(response.data.post);
                    response.data.post.image = "http://127.0.0.1:8000/postImage/" + response.data.post.image
                    this.postList = response.data.post

                    // For js Date Format
                    let $date = new Date(response.data.post.created_at);
                    this.jsDateFormat = $date.getDate() + "-" + ($date.getMonth() + 1) + "-" + $date.getFullYear();

                });
        },
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
        loadViewCount() {
            let viewData = {
                userId: this.getUserData.id,
                postId: this.$route.params.postId
            }
            axios.post('http://127.0.0.1:8000/api/postViewCounts', viewData).then((response) => {
                this.viewCount = response.data.views.length;
            })
        },
        commentBtn() {
            let commentData = {
                userId: this.getUserData.id,
                postId: this.$route.params.postId,
                comment: this.inputComment
            }
            axios.post('http://127.0.0.1:8000/api/postComment', commentData).then((response) => {
                if (response.data.status == 'success') {
                    location.reload();
                }
            });
        },
        loadComments() {
            axios.post('http://127.0.0.1:8000/api/loadComments', { postId: this.$route.params.postId }).then((response) => {
                for (let i = 0; i < response.data.comments.length; i++) {
                    this.commentImg = "http://127.0.0.1:8000/profileImage/" + response.data.comments[i].userImage

                    // For comment Date Format
                    let $months = ['Jan', 'Feb', 'March', 'april', 'May', 'Jun', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
                    let $date = new Date(response.data.comments[i].created_at);

                    this.commentDateFormat = $date.getDate() + "-" + $months[$date.getMonth()] + "-" + $date.getFullYear();
                }
                this.commentList = response.data.comments;
            });
        },
        commentDelete($commentId) {
            axios.post('http://127.0.0.1:8000/api/commentDelete', { commentId: $commentId }).then((response) => {
                if (response.data.status == 'success') {
                    location.reload();
                }
            });
        }
    },
    computed: {
        ...mapGetters(['getUserData', 'getToken'])
    },
    mounted() {
        this.loadPost();
        this.getLoadStorageData();
        this.loadViewCount();
        this.loadComments();
    }
}