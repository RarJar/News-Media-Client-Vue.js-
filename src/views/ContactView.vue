<template>
    <section class="py-5 container">
            <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">Get in Touch</h2>
                    </div>
                    <div class="col-lg-8">
                        <div class="row">
                                 <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid py-4" type="text" placeholder="Enter your name" v-model="inputData.name">
                                        <p class="text-danger mt-1" v-if="this.inputVali.name">The name field is required</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid py-4" type="email" placeholder="Enter Email" v-model="inputData.email">
                                        <p class="text-danger mt-1" v-if="this.inputVali.email">The email field is required</p>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control w-100" cols="30" rows="7" placeholder="Enter Message" v-model="inputData.message"></textarea>
                                        <p class="text-danger mt-1" v-if="this.inputVali.message">The feedback message field is required</p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3 mb-4">
                                <button class="button button-contactForm boxed-btn" @click="sendBtn()">Send</button>
                            </div>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                                <h3>Yangon, Myanmaar.</h3>
                                <p>Shwe Gone Daing, Bahan</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                                <h3>+95 9252250030</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                <h3>yarzarminkhant2003@email.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
            </div>
    </section>
</template>

<script src="../export_Js/ContactView.js"></script>

