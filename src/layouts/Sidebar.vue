<template>
    <div>
        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="/" class="brand-link text-center">

                <span class="brand-text font-weight-light"><b>Admin</b></span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                        <li class="nav-item menu-open">
                            <a href="#" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Starter Pages
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <!-- <a href="#" class="nav-link active">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Active Page</p>
                                    </a> -->
                                    <RouterLink to="/" class="nav-link active">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Active Page</p>
                                    </RouterLink>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Inactive Page</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <!-- <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-th"></i>
                                <p>
                                    Simple Link
                                    <span class="right badge badge-danger">New</span>
                                </p>
                            </a> -->
                            <RouterLink to="/simple" class="nav-link ">
                                <i class="nav-icon fas fa-th"></i>
                                <p>
                                    Simple Link
                                    <span class="right badge badge-danger">New</span>
                                </p>
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>