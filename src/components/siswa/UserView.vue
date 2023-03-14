<template>
    <div>
    <navbar-component></navbar-component>
    <sidebar-component></sidebar-component>
    <div class="content-wrapper">            
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 font-weight-bold">Data Siswa</h1>
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
                                <router-link class="btn btn-info mb-2" to="/createsiswa">
                                    <i class="fas fa-plus"></i> Tambah Siswa
                                </router-link>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                        <th style="width: 10px">ID</th>
                                        <th>Nama</th>
                                        <th>Kelas</th>
                                        <th>Tanggal Lahir</th>
                                        <th>Alamat</th>
                                        <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="s in siswa" :key="s.id_siswa">
                                            <td>{{ s.id_siswa }}</td>
                                            <td>{{ s.nama_siswa }}</td>
                                            <td>{{ s.nama_kelas }}</td>
                                            <td>{{ s.tanggal_lahir }}</td>
                                            <td>{{ s.alamat }}</td>
                                            <td>
                                                <div class="btn-group">
                                                    <router-link class="btn btn-warning" :to="{ path : '/editsiswa/' + s.id_siswa } "> Edit </router-link>  
                                                    <button type="button" @click="remove(s)" class="btn btn-danger"> Hapus </button>                                                      
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
            siswa : {}
        }
    },  
    created() {
        this.GetSiswa()

    },
    methods : {
        GetSiswa() {
            var page = 'http://localhost:8000/api/getsiswa';
            axios.get(page).then(
                ({data})=>{
                    console.log(data);
                    this.siswa = data;
                }
            );
        },
        remove(s) {
            var url = 'http://localhost:8000/api/deletesiswa/' + s.id_siswa;
            axios.delete(url);
            alert("Sukses Menghapus Data Siswa")
            this.userLoad
            location.reload()
        }
    }
}
</script>