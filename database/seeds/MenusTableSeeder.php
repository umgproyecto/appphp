<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class MenusTableSeeder extends Seeder
{
    private $menuId = null;
    private $dropdownId = array();
    private $dropdown = false;
    private $sequence = 1;
    private $joinData = array();
    private $adminRole = null;
    private $userRole = null;

    public function join($roles, $menusId){
        $roles = explode(',', $roles);
        foreach($roles as $role){
            array_push($this->joinData, array('role_name' => $role, 'menus_id' => $menusId));
        }
    }

    /*
        Function assigns menu elements to roles
        Must by use on end of this seeder
    */
    public function joinAllByTransaction(){
        DB::beginTransaction();
        foreach($this->joinData as $data){
            DB::table('menu_role')->insert([
                'role_name' => $data['role_name'],
                'menus_id' => $data['menus_id'],
            ]);
        }
        DB::commit();
    }

    public function insertLink($roles, $name, $href, $icon = null){
        if($this->dropdown === false){
            DB::table('menus')->insert([
                'slug' => 'link',
                'name' => $name,
                'icon' => $icon,
                'href' => $href,
                'menu_id' => $this->menuId,
                'sequence' => $this->sequence
            ]);
        }else{
            DB::table('menus')->insert([
                'slug' => 'link',
                'name' => $name,
                'icon' => $icon,
                'href' => $href,
                'menu_id' => $this->menuId,
                'parent_id' => $this->dropdownId[count($this->dropdownId) - 1],
                'sequence' => $this->sequence
            ]);
        }
        $this->sequence++;
        $lastId = DB::getPdo()->lastInsertId();
        $this->join($roles, $lastId);
        $permission = Permission::where('name', '=', $name)->get();
        if(empty($permission)){
            $permission = Permission::create(['name' => 'visit ' . $name]);
        }
        $roles = explode(',', $roles);
        if(in_array('user', $roles)){
            $this->userRole->givePermissionTo($permission);
        }
        if(in_array('admin', $roles)){
            $this->adminRole->givePermissionTo($permission);
        }
        return $lastId;
    }

    public function insertTitle($roles, $name){
        DB::table('menus')->insert([
            'slug' => 'title',
            'name' => $name,
            'menu_id' => $this->menuId,
            'sequence' => $this->sequence
        ]);
        $this->sequence++;
        $lastId = DB::getPdo()->lastInsertId();
        $this->join($roles, $lastId);
        return $lastId;
    }

    public function beginDropdown($roles, $name, $href='', $icon=''){
        if(count($this->dropdownId)){
            $parentId = $this->dropdownId[count($this->dropdownId) - 1];
        }else{
            $parentId = null;
        }
        DB::table('menus')->insert([
            'slug' => 'dropdown',
            'name' => $name,
            'icon' => $icon,
            'menu_id' => $this->menuId,
            'sequence' => $this->sequence,
            'parent_id' => $parentId,
            'href' => $href
        ]);
        $lastId = DB::getPdo()->lastInsertId();
        array_push($this->dropdownId, $lastId);
        $this->dropdown = true;
        $this->sequence++;
        $this->join($roles, $lastId);
        return $lastId;
    }

    public function endDropdown(){
        $this->dropdown = false;
        array_pop( $this->dropdownId );
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /* Get roles */
        $this->adminRole = Role::where('name' , '=' , 'admin' )->first();
        $this->userRole = Role::where('name', '=', 'user' )->first();
        $dropdownId = array();
        /* Create Sidebar menu */
        DB::table('menulist')->insert([
            'name' => 'sidebar menu'
        ]);
        $this->menuId = DB::getPdo()->lastInsertId();  //set menuId
        /* guest menu */
        $this->insertLink('guest,user,admin', 'Tablero', '/', 'cil-speedometer');

        $this->insertLink('guest', 'Login', '/login', 'cil-account-logout');
        $this->insertLink('guest', 'Register', '/register', 'cil-account-logout');

        /* menu Settings */
        $this->beginDropdown('admin', 'Configuraciones', '/', 'cil-calculator');
            $this->insertLink('admin', 'Medios',    '/media');
            $this->insertLink('admin', 'Usuarios',    '/users');
            $this->insertLink('admin', 'Menu',    '/menu');
            $this->insertLink('admin', 'BREAD',    '/bread');
            $this->insertLink('admin', 'Email',    '/email');
        $this->endDropdown();
        /* end menu Settings */

        /* title menu Administration */
        $this->insertTitle('admin', 'Componentes');

        $this->beginDropdown('admin', 'CRM', '/crm', 'cil-star');
            $this->insertLink('admin', 'Clientes', '/crm/clients');
            $this->insertLink('admin', 'Devoluciones', '/crm/returns');
            $this->insertLink('admin', 'Ventas', '/crm/sales');
        $this->endDropdown();

        $this->beginDropdown('admin', 'FRM', '/frm', 'cil-puzzle');
            $this->insertLink('admin', 'Cuentas por Cobrar', '/frm/accounts-receivable');
            $this->insertLink('admin', 'Cuentas por pagar', '/frm/accounts-for-pay');
            $this->insertLink('admin', 'Gastos', '/frm/expenses');
        $this->endDropdown();

        $this->beginDropdown('admin', 'HRM', '/hrm', 'cil-people');
            $this->insertLink('admin', 'Asistencias', '/hrm/assists');
            $this->insertLink('admin', 'Cargos', '/hrm/charges');
            $this->insertLink('admin', 'Contratos', '/hrm/contracts');
            $this->insertLink('admin', 'Ajustes de rol', '/hrm/roles');
            $this->insertLink('admin', 'Empleados', '/hrm/employees');
            $this->insertLink('admin', 'Salarios', '/hrm/wages');
        $this->endDropdown();

        $this->beginDropdown('admin', 'SCM', '/scm', 'cil-cursor');
            $this->insertLink('admin', 'Compras', '/scm/purchases');
            $this->insertLink('admin', 'Inventario', '/scm/inventories');
            $this->insertLink('admin', 'Marcas', '/scm/brands');
            $this->insertLink('admin', 'Productos', '/scm/products');
            $this->insertLink('admin', 'Proveedores', '/scm/suppliers');
        $this->endDropdown();


        $this->insertTitle('user,admin', 'Components');
        $this->beginDropdown('user,admin', 'Base', '/base', 'cil-puzzle');
            $this->insertLink('user,admin', 'Breadcrumb',    '/base/breadcrumb');
            $this->insertLink('user,admin', 'Cards',         '/base/cards');
            $this->insertLink('user,admin', 'Carousel',      '/base/carousel');
            $this->insertLink('user,admin', 'Collapse',      '/base/collapse');
            $this->insertLink('user,admin', 'Forms',         '/base/forms');
            $this->insertLink('user,admin', 'Jumbotron',     '/base/jumbotron');
            $this->insertLink('user,admin', 'List group',    '/base/list-group');
            $this->insertLink('user,admin', 'Navs',          '/base/navs');
            $this->insertLink('user,admin', 'Pagination',    '/base/pagination');
            $this->insertLink('user,admin', 'Popovers',      '/base/popovers');
            $this->insertLink('user,admin', 'Progress',      '/base/progress');
            $this->insertLink('user,admin', 'Scrollspy',     '/base/scrollspy');
            $this->insertLink('user,admin', 'Switches',      '/base/switches');
            $this->insertLink('user,admin', 'Tables',        '/base/tables');
            $this->insertLink('user,admin', 'Tabs',          '/base/tabs');
            $this->insertLink('user,admin', 'Tooltips',      '/base/tooltips');
        $this->endDropdown();

        $this->beginDropdown('user,admin', 'Buttons', '/buttons', 'cil-cursor');
            $this->insertLink('user,admin', 'Buttons',           '/buttons/buttons');
            $this->insertLink('user,admin', 'Buttons Group',     '/buttons/button-group');
            $this->insertLink('user,admin', 'Dropdowns',         '/buttons/dropdowns');
            $this->insertLink('user,admin', 'Brand Buttons',     '/buttons/brand-buttons');
        $this->endDropdown();

        $this->insertLink('user,admin', 'Charts', '/charts', 'cil-chart-pie');
        $this->beginDropdown('user,admin', 'Icons', '/icon', 'cil-star');
            $this->insertLink('user,admin', 'CoreUI Icons',      '/icon/coreui-icons');
            $this->insertLink('user,admin', 'Flags',             '/icon/flags');
            $this->insertLink('user,admin', 'Brands',            '/icon/brands');
        $this->endDropdown();
            $this->beginDropdown('user,admin', 'Notifications', '/notifications', 'cil-bell');
            $this->insertLink('user,admin', 'Alerts',     '/notifications/alerts');
            $this->insertLink('user,admin', 'Badge',      '/notifications/badge');
            $this->insertLink('user,admin', 'Modals',     '/notifications/modals');
        $this->endDropdown();

        $this->insertLink('user,admin', 'Widgets', '/widgets', 'cil-calculator');
        $this->insertTitle('user,admin', 'Extras');

        $this->beginDropdown('user,admin', 'Pages', '/pages', 'cil-star');
            $this->insertLink('user,admin', 'Login',         '/login');
            $this->insertLink('user,admin', 'Register',      '/register');
            $this->insertLink('user,admin', 'Error 404',     '/404');
            $this->insertLink('user,admin', 'Error 500',     '/500');
        $this->endDropdown();

        /* Create top menu */
        $this->insertTitle('user,admin', 'Tema');
        $this->insertLink('user,admin', 'Colores', '/colors', 'cil-drop');
        $this->insertLink('user,admin', 'Tipografía', '/typography', 'cil-pencil');


        $this->insertTitle('user,admin', 'Extras');
        $this->insertLink('user,admin', 'Reportes', '/reports', 'cil-chart-pie');

        DB::table('menulist')->insert([
            'name' => 'top_menu'
        ]);

        $this->menuId = DB::getPdo()->lastInsertId();  //set menuId
        $this->beginDropdown('guest,user,admin', 'Páginas');
            $this->insertLink('guest,user,admin', 'Tablero',    '/');
            $this->insertLink('user,admin', 'Notas',              '/notes');
            $this->insertLink('admin', 'Usuarios',                   '/users');
        $this->endDropdown();
        $this->beginDropdown('admin', 'Configuración');
            $this->insertLink('admin', 'Editar menu',               '/menu');
            $this->insertLink('admin', 'Editar roles',              '/roles');
            $this->insertLink('admin', 'Media',                   '/media');
            $this->insertLink('admin', 'BREAD',                   '/bread');
            $this->insertLink('admin', 'Email',                  '/email');
        $this->endDropdown();

        $this->joinAllByTransaction(); ///   <===== Must by use on end of this seeder
    }
}
