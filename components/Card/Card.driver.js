export const CardDriver = comp => ({
  getAddress: () => comp.find('[data-hook="address"]').text(),
  getImage: () => comp.find('img').prop('src'),
  getRooms: () =>
    comp
      .find('[data-hook="rooms"]')
      .text()
      .replace(' room', ''),
  getPrice: () => comp.find('[data-hook="price"]').text(),
});
