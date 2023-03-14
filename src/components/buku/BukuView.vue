<template>
    <div>
    <navbar-component></navbar-component>
    <sidebar-component></sidebar-component>
    <div class="content-wrapper">            
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 font-weight-bold">Data Buku</h1>
                    </div>          
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card card-primary card-outline">
                            <div class="card-body">
                                <router-link class="btn btn-info mb-2" to="/createbuku">
                                    <i class="fas fa-plus"></i> Tambah buku
                                </router-link>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                        <th style="width: 10px">ID</th>
                                        <th>Judul Buku</th>
                                        <th>Penulis</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="b in buku" :key="b.id_buku">
                                            <td>{{ b.id_buku }}</td>
                                            <td>{{ b.judul_buku }}</td>
                                            <td>{{ b.pengarang }}</td>
                                            <td>
                                                <div class="btn-group">
                                                    <router-link class="btn btn-warning" :to="{ path : '/editbuku/' + b.id_buku } "> Edit </router-link>  
                                                    <button type="button" @click="remove(b)" class="btn btn-danger"> Hapus </button>                                                      
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

export default {
    data() {
        return {
            buku : {}
        }
    },  
    created() {
        this.GetBuku()

    },
    methods : {
        GetBuku() {
            var page = 'http://localhost:8000/api/getbuku';
            axios.get(page).then(
                ({data})=>{
                    console.log(data);
                    this.buku = data;
                }
            );
        },
        remove(b) {
            var url = 'http://localhost:8000/api/deletebuku/' + b.id_buku;
            axios.delete(url);
            alert("Sukses Menghapus Buku")
            this.userLoad
            location.reload()
        }
    }
}
</script>