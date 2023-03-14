<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Edit Buku</h1>
                        </div>          
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card card-success">
                                <div class="card-header">
                                    <h3 class="card-title">Edit buku</h3>
                                </div>
                                <form @submit.prevent="save_edit">
                                    <div class="card-body">
                                        <input type="hidden" v-model="id_buku">
                                        <div class="form-group">
                                            <label>Judul Buku</label>
                                            <input type="text" class="form-control" v-model="judul_buku" autocomplete="off" placeholder="Masukkan judul..">
                                        </div>                                        
                                        <div class="form-group">
                                            <label>pengarang</label>
                                            <textarea rows="4" class="form-control" v-model="pengarang"></textarea>
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
    data : function () {
        return {
            buku : [],
            id_buku : "",
            judul_buku : "",
            pengarang : "",
        }
    },
    mounted() {
        this.GetBuku()
        this.GetDetail(this.$route.params.id)
            
    },
    methods : {
        GetBuku : function (){
            axios.get('http://localhost:8000/api/getbuku').then(
            ({data}) => {
                this.buku = data
            }
            )
        },
        GetDetail(id_buku) {
            axios.get('http://localhost:8000/api/detailbuku/' + id_buku).then(
            (response) => {
                console.log(response.data[0])
                this.id_buku = response.data[0].id_buku
                this.judul_buku = response.data[0].judul_buku
                this.pengarang = response.data[0].pengarang
            }
            );
        },
        save_edit : function() {
            let data =
            {
                id_buku : this.id_buku,
                judul_buku : this.judul_buku,
                pengarang : this.pengarang,
            }
            axios.put('http://localhost:8000/api/updatebuku/' + this.id_buku, data).then(
                (response) => {
                    alert("Sukses Mengubah Buku")
                    console.log(response)
                    this.$router.push('/getbuku')
                }
            );
        }
    }
}
</script>