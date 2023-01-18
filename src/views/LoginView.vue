<template>
    <section>
        <!-- Jumbotron -->
        <div class="px-4 py-5 px-md-5 text-center text-lg-start">
            <div class="container">
                <div class="row gx-lg-5 align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <h1 class="my-5 display-3 fw-bold ls-tight text-danger">
                            AZ <span class="text-dark">News</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum maiores libero veritatis? Dicta facilis sint aliquid ipsum atque?
                        </p>
                    </div>

                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <div class="card">
                            <div class="card-body pt-5 pb-4 px-md-5">
                                <div class="form-outline mb-4">
                                        <h3 class="w-100 d-flex justify-content-start text-primary">
                                            Login your account
                                        </h3>
                                    </div>
                                    <!-- Email input -->
                                    <div class="form-outline mb-4">
                                        <label class="w-100 d-flex justify-content-start">Email address</label>
                                        <input type="email" class="form-control" v-model="userData.email" placeholder="Enter your email"/>
                                        <p class="text-danger w-100 d-flex justify-content-start mt-1" v-if="this.validationStatus.emailValidation">The email field is required</p>
                                    </div>

                                    <!-- Password input -->
                                    <div class="form-outline mb-4">                                        
                                        <label class="w-100 d-flex justify-content-start">Password</label>
                                        <input type="password" class="form-control" v-model="userData.password" placeholder="Enter your password"/>
                                        <p class="text-danger w-100 d-flex justify-content-start mt-1" v-if="this.validationStatus.passValidation">The password field is required</p>
                                    </div>

                                    <!-- Submit button -->
                                    <button class="btn-sm btn-primary btn-block py-2 mb-4" @click="loginBtn()">
                                        Login
                                    </button>
                                    
                                    <!-- Register buttons -->
                                    <div class="d-flex flex-wrap justify-content-center">
                                        <p class="me-1">Don't you have account?</p>
                                        <router-link to="/SignUpView" class="nav-link text-primary fw-bold">Sign Up Here</router-link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Jumbotron -->
    </section>
</template>

<script src="../export_Js/LoginView.js"></script>
