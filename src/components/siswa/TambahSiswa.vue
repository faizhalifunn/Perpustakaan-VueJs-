<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Form Tambah Siswa</h1>
                        </div>          
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card card-success">
                                <div class="card-header">
                                    <h3 class="card-title">Tambah Siswa</h3>
                                </div>
                                <form @submit.prevent="save">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Nama Siswa</label>
                                            <input type="text" class="form-control" v-model="siswa.nama_siswa" autocomplete="off" placeholder="Masukkan nama..">
                                        </div>                                        
                                        <div class="form-group">
                                            <label>Tanggal Lahir</label>
                                            <b-form-datepicker id="example-datepicker" class="mb-2" v-model="siswa.tanggal_lahir"></b-form-datepicker>
                                        </div>
                                        <div class="form-group">
                                            <div>
                                                <label>Jenis Kelamin</label>
                                            </div>
                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">                                                
                                                <label class="btn btn-secondary">
                                                    <input type="radio" value="L" v-model="siswa.gender"> Laki-laki
                                                </label>
                                                <label class="btn btn-secondary">
                                                    <input type="radio" value="P" v-model="siswa.gender"> Perempuan
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Alamat</label>
                                            <textarea rows="4" class="form-control" v-model="siswa.alamat"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label>Kelas</label>
                                            <select class="form-control" v-model="siswa.id_kelas">                                                   
                                                <option v-for="k in kelas" :key="k.id_kelas" :value="k.id_kelas" >{{ k.nama_kelas }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Simpan</button>
                                    </div>
                                </form>
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
            siswa : {},
            kelas : {}
        }
    },
    created() {    
        this.DataKelas()
            
    },
    methods : {
        DataKelas() {
            axios.get('http://localhost:8000/api/getkelas').then(
            ({data}) => {
                this.kelas = data
            }
        )
        },
        save() {
            this.save_data()
        },
        save_data() {
            axios.post('http://localhost:8000/api/createsiswa', this.siswa).then(
                ({data}) => {
                    alert("Sukses Menambah Siswa")
                    this.$router.push('/getsiswa')
                    this.siswa = data
                }
            )
        }
 
    }
}
</script>