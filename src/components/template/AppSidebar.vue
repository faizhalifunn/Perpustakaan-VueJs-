<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="#" class="brand-link">
            <span class="brand-text font-weight-reguler">Perpustakaan</span>        
        </a>
        
        <!-- Sidebar -->
        <div class="sidebar">             

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <router-link to="/" href="#" class="nav-link">
                        <i class="nav-icon fas fa-home"></i>
                        <p>Dashboard</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/getsiswa" href="#" class="nav-link">
                        <i class="nav-icon fas fa-user-friends"></i>
                        <p>Siswa</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a href="/getbuku" class="nav-link">
                        <i class="nav-icon fas fa-book"></i>
                        <p>Buku</p>
                    </a>
                </li>
                        <li class="nav-item">
                            <a href="/pinjam" class="nav-link">
                                <i class="fas fa-plus-square nav-icon"></i>
                                <p>Peminjaman</p>
                            </a>
                        </li>
                <li class="nav-item">
                    <a href="/history" class="nav-link">
                        <i class="fas fa-list nav-icon"></i>
                        <p>History</p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
export default {
    
}
</script>