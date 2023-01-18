<template>
  <div class="container d-flex flex-wrap justify-content-between align-items-center py-3">
        <h4>Whats New</h4>
        <select class="form-select col-md-3 mx-3" @change="search_ByCategory($event)">
          <option value="all">All category</option>
          <option :value="item.id" v-for="(item,index) in categoryList" :key="index">
            {{item.title}}
          </option>
        </select>
    </div>
    <div class="container d-flex flex-wrap justify-content-between align-items-center pb-3">
        <h5 class="text-danger">Total news - {{countPosts}}</h5>
        <div class="input-group col-md-4">
          <input type="text" class="form-control" placeholder="Search post" v-model="searchKey">
          <button class="btn btn-danger" @click="search()">Search</button>
        </div>
    </div>
    <section class="whats-news-area pb-20">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                          <div class="col-12">
                            <!-- Nav Card -->
                            <div class="tab-content" id="nav-tabContent">
                              <!-- card one -->
                              <div
                                class="tab-pane fade show active"
                                id="nav-home"
                                role="tabpanel"
                                aria-labelledby="nav-home-tab"
                              >
                                <div class="whats-news-caption">
                                  <div class="row">             
                                    <div class="col-lg-6 col-md-6" v-for="(item,index) in postList" :key="index" @click="viewPostDetails(item.id)">
                                      
                                      <div class="single-what-news mb-100">
                                        <div class="what-img">
                                          <img :src="item.image" style="height: 420px;" class="img-thumbnail">
                                        </div>
                                        <div class="what-cap bg-light rounded ps-2">
                                          <span class="color4">{{item.title}}</span>
                                          <h4>
                                            <p class="Description_More">
                                              {{item.description}}
                                            </p>
                                          </h4>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Nav Card -->
                          </div>
                        </div>
                        <!-- There is no post ! -->
                        <div class="d-flex justify-content-center align-items-center" style="height: 100px;" v-if="countPosts === 0">
                          <p class="text-danger">There is no post !</p>
                        </div>
                    </div>
                </div>
            </div>
   </section>
</template>

<script src="../export_Js/HomeView.js"></script>
