import { defineStore } from 'pinia'

export interface MenuItem {
  icon?: string
  label: string
  to: string
  submenu?: MenuItem[]
}

export const useMainMenuStore = defineStore('MainMenu', {
  state: () => ({
    menuItems: [
      {
        icon: 'mdi-home',
        label: 'Inicio',
        to: '/',
      },
      {
        icon: 'mdi-tools',
        label: 'Servicios',
        to: '/servicios',
        submenu: [
          {
            label: 'Servicio 1',
            to: '/servicios/servicio1',
          },
          {
            label: 'Servicio 2',
            to: '/servicios/servicio2',
          },
          {
            label: 'Servicio 3',
            to: '/servicios/servicio3',
          },
        ],
      },
      {
        icon: 'mdi-package',
        label: 'Productos',
        to: '/productos',
        submenu: [
          {
            icon: 'mdi-package',
            label: 'Brother',
            to: '/productos/brother',
            submenu: [
              {
                icon: 'mdi-printer',
                label: 'Impresoras',
                to: '/productos/brother/impresoras',
              },
              {
                label: 'Consumibles',
                to: '/productos/brother/consumibles',
              },
            ],
          },
          {
            icon: 'mdi-printer',
            label: 'Hp',
            to: '/productos/hp',
            submenu: [
              {
                label: 'Impresoras',
                to: '/productos/hp/impresoras',
              },
              {
                label: 'Consumibles',
                to: '/productos/hp/consumibles',
              },
            ],
          },
          {
            icon: 'mdi-package',
            label: 'Producto 3',
            to: '/productos/producto3',
            submenu: [
              {
                label: 'Producto 3.1',
                to: '/productos/producto3.1',
              },
              {
                label: 'Producto 3.2',
                to: '/productos/producto3.2',
              },
              {
                label: 'Producto 3.3',
                to: '/productos/producto3.3',
              },
              {
                label: 'Producto 3.4',
                to: '/productos/producto3.4',
              },
            ],
          },
        ],
      },
      {
        icon: 'mdi-information',
        label: 'Condiciones de Venta',
        to: '/condiciones-ventas',
      },
      {
        icon: 'mdi-email',
        label: 'Contacto',
        to: '/contacto',
      },
    ] as MenuItem[],
  }),
})
