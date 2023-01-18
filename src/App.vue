<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-light shadow-sm py-3 px-3" style="background-color: hsl(0, 0%, 96%)">
  <div class="container">
    <a class="navbar-brand">
      <img src="/assets/img/logo/logo.png"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-dark fw-bold">Home</router-link>
        </li>
        <li class="nav-item" v-if="getToken != '' ">
          <router-link to="/ContactView" class="nav-link text-dark fw-bold">Contact</router-link>
        </li>
        <li class="nav-item dropdown" v-if="getToken == '' ">
          <router-link to="/LoginView" class="nav-link text-dark fw-bold">Login</router-link>
        </li>
        <li class="nav-item dropdown" v-else>
          <a class="nav-link dropdown-toggle fw-bold" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/EditProfileView" class="dropdown-item">Profile</router-link>
            </li>
            <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#changePassword">Change password</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item text-danger" @click="logout()">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <!-- End Navbar -->

<!--Start Dialog -->
    <div class="modal fade" id="changePassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-light">
            <div class="modal-header">
                <h3 class="modal-title fs-5" id="exampleModalLabel">Change password</h3>
                <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="col-md-12">
              <div>
                  <div class="card-body">

                      <div class="form-group">
                        <label>Old password</label>
                        <input type="password" class="form-control" placeholder="Enter old password" v-model="inputData.oldPass">

                         <!-- Error -->
                        <div>
                          <p class="text-danger mt-1" v-if="this.inputVali.oldPass">The old password field is required</p>
                          <p class="text-danger mt-1" v-if="this.inputVali.oldMatch">The old password does not match</p>
                        </div> 
                        <!-- Error -->

                      </div>

                      <div class="form-group">
                        <label>New password</label>
                        <input type="password" class="form-control" placeholder="Enter new password" v-model="inputData.newPass">

                         <!-- Error -->
                        <div>
                          <p class="text-danger mt-1" v-if="this.inputVali.newPass">The new password field is required</p>
                        </div> 
                        <!-- Error -->

                      </div>

                      <div class="form-group">
                        <label>Confirm password</label>
                        <input type="password" class="form-control" placeholder="Enter comfirm password" v-model="inputData.comfirm">

                        <!-- Error -->
                        <div>
                          <p class="text-danger mt-1" v-if="this.inputVali.comfirm">The confirm password field is required</p>
                          <p class="text-danger mt-1" v-if="this.inputVali.passMatch">The confirm password and new password must match</p>
                        </div> 
                        <!-- Error -->

                      </div>

                      <div class="form-group text-end">
                         <button class="btn btn-dark" @click="changePass()">Change</button>
                      </div>
                    </div>
                    <!-- /.card-body -->
              </div>
              </div>
            </div>
            </div>
        </div>
    </div>
<!--End Dialog -->

  <main>
    <router-view></router-view>
  </main>

</template>

<script src="./export_Js/App.js"></script>
