<template>
            <div class="container about-area">
                    <!-- Hot Aimated News Tittle-->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="d-flex align-items-center py-3">
                                <button class="btn btn-danger">Trending now</button> 
                                <button class="btn btn-sm btn-primary ms-3" v-if="getToken != '' ">
                                    Views - {{viewCount}}
                                </button>                  
                            </div>
                        </div>
                    </div>
                   <div class="row">
                        <div class="col-lg-8">
                            <!-- Trending Tittle -->
                            <div class="about-right mb-4">
                                <div class="about-img">
                                    <img :src="this.postList.image" style="height: 420px;" class="img-thumbnail w-100">
                                </div>
                                <div class="d-flex flex-wrap justify-content-between section-tittle mb-2 pt-3">
                                    <div>
                                        <span class="btn btn-sm btn-secondary mb-2">Category - {{this.postList.category_title}}</span>
                                        <h2>{{this.postList.title}}</h2>
                                    </div>
                                    <span class="text-primary">Date- {{ this.jsDateFormat }}</span>
                                </div>
                                <div class="about-prea">
                                    <p class="about-pera1 mb-3">
                                        {{this.postList.description}}
                                    </p>
                                </div> 
                            </div>
                                                                               
                            <div class="row" v-if="getToken != '' ">
                                <div class="col-lg-12">
                                    <textarea class="form-control col-lg-12" name="message" cols="30" rows="3" placeholder="Enter Message" v-model="inputComment"></textarea>
                                    <button class="button button-contactForm boxed-btn my-3" @click="commentBtn()">Send</button>
                                </div>
                                <div class="col-lg-12 pb-2">
                                    <!-- Comment box -->
                                    <div class="my-1 p-2" v-for="(item,index) in commentList" :key="index">
                                        <div class="d-flex flex-row align-items-center mb-1">

                                            <img src="../../public/assets/img/defaultProfile.png" style="width: 40px" class="me-2" v-if="item.userImage == null">
                                            <img :src="this.commentImg" style="width: 40px; height:40px" class="me-2 rounded-pill" v-else>

                                            <div class="d-flex flex-column align-items-start">
                                                <span class="fw-bold text-danger" v-if="item.userName === null">Deleted Account</span>
                                                <span class="fw-bold">{{item.userName}}</span>
                                                <span>Date - {{this.commentDateFormat}}</span>
                                            </div>
                                        </div>
                                        <span>{{item.comment}}</span>
                                        <div class="w-100 text-end fs-5" v-if="this.getUserData.id == item.user_id">
                                            <i class="fa-solid fa-trash text-danger lower-case" @click="commentDelete(item.id)"></i>
                                        </div>
                                        <hr>
                                    </div>
                                    <!--End Comment box -->
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                             <div class="news-poster d-none d-lg-block mb-4">
                                <img src="/assets/img/news/news_card.jpg">
                            </div>
                            <!-- Section Tittle -->
                            <div class="section-tittle my-4 ms-2">
                                <h3>Follow Us</h3>
                            </div>
                            <!-- Flow Socail -->
                            <div class="single-follow mb-4">
                                <div class="single-box">
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <a href="#"><img src="/assets/img/news/icon-fb.png" alt=""></a>
                                        </div>
                                        <div class="follow-count">  
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div> 
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <a href="#"><img src="/assets/img/news/icon-tw.png" alt=""></a>
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                        <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <a href="#"><img src="/assets/img/news/icon-ins.png" alt=""></a>
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <a href="#"><img src="/assets/img/news/icon-yo.png" alt=""></a>
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- New Poster -->
                        </div>
                   </div>
            </div>
</template>

<script src="../export_Js/PostDetailsView.js"></script>