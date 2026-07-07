export function useMainMenu() {
  const menuItems = [
    { label: 'Inicio', name: 'home' },
    { label: 'Soluciones', name: 'solutions' },
    { label: 'Asesoramiento', name: 'consulting' },
    { label: 'Condiciones de venta', name: 'terms' },
  ];

  return { menuItems };
}