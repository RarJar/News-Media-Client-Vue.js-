<template>
    <section class="content py-4">
            
            <div class="col-md-12 container d-flex justify-content-center">
                                
                <div class="col-md-7">
                <div class="card card-primary">
                        <div class="card-body">

                        <!-- <div class="form-group d-flex flex-column">
                            <img src="../../public/assets/img/defaultProfile.png" style="width: 140px" v-if="inputData.image === null">
                            <img :src="this.myProfileImage" class="img-thumbnail" style="width: 140px" v-else>                                
                        </div> -->

                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="Enter name" v-model="this.inputData.name">
                            <!-- Require message -->
                            <p class="text-danger mt-1" v-if="this.inputVali.name">The name field is required</p>
                        </div>

                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" class="form-control" placeholder="Enter email" v-model="this.inputData.email">
                            <!-- Require message -->
                            <p class="text-danger mt-1" v-if="this.inputVali.email">The email field is required</p>
                        </div>

                        <div class="form-group">
                            <label>Address</label>
                            <textarea name="userAddress" class="form-control" cols="30" rows="4" placeholder="Address" v-model="this.inputData.address"></textarea>
                            <!-- Require message -->
                            <p class="text-danger mt-1" v-if="this.inputVali.address">The address field is required</p>
                        </div>
                        
                        <div class="form-group">
                            <label>Gender</label>
                            <select class="form-select" @change="selectGender($event)">
                                <option :value="genderOption.Choose" :selected="this.inputData.gender == null ">Choose gender</option>
                                <option :value="genderOption.Male" :selected="this.inputData.gender == 'M' ">Male</option>
                                <option :value="genderOption.Female" :selected="this.inputData.gender == 'F' ">Female</option>
                            </select>
                            <!-- Require message -->
                            <p class="text-danger mt-1" v-if="this.inputVali.gender">The gender field is required</p>
                        </div>
                        
                        </div>                        
                        <div class="d-flex justify-content-end px-4 pb-2">
                        <button class="btn btn-dark" @click="updateProfile()">Update profile</button>                        
                    </div>                
                </div>
            </div>
            </div>

    </section>
</template>

<script src="../export_Js/EditProfileView.js"></script>
