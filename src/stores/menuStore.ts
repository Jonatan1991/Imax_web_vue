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
            label: 'Soporte Técnico Informático',
            to: '/servicios/servicio1',
          },
          {
            label: 'Soporte Técnico Brother',
            to: '/servicios/servicio2',
          },
          {
            label: 'Ordenadores',
            to: '/servicios/servicio3',
            submenu: [
              {
                label: 'Ordenadores a medida',
                to: '/servicios/servicio3.1',
              },
              {
                label: 'Reparación de Ordenadores',
                to: '/servicios/servicio4',
              },
              {
                label: 'Renovación de Ordenadores',
                to: '/servicios/servicio5',
              },
            ],
          },

          {
            label: 'Software a Medida',
            to: '/servicios/servicio5',
          },
          {
            label: 'Soluciones Microsoft',
            to: '/servicios/microsoft-copilot',
            submenu: [
              {
                label: 'Microsoft 365 Copilot & IA',
                to: '/servicios/microsoft-copilot',
              },
              {
                label: 'Seguridad M365 (Defender & Purview)',
                to: '/servicios/seguridad-microsoft-365',
              },
              {
                label: 'Microsoft Fabric & Big Data',
                to: '/servicios/microsoft-fabric',
              },
            ],
          },
          {
            label: 'Automatiza tu Empresa',
            to: '/servicios/servicio6',
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
            icon: 'mdi-devices',
            label: 'Accesorios y Redes',
            to: '/productos/accesorios',
            submenu: [
              {
                label: 'Periféricos',
                to: '/productos/accesorios/perifericos',
              },
              {
                label: 'Almacenamiento',
                to: '/productos/accesorios/almacenamiento',
              },
              {
                label: 'Conectividad y Redes',
                to: '/productos/accesorios/redes',
              },
            ],
          },
        ],
      },
      {
        icon: 'mdi-account-plus',
        label: 'Hágase Cliente',
        to: '/cliente',
      },
      {
        icon: 'mdi-newspaper',
        label: 'Blog',
        to: '/blog',
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
