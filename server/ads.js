const cheerio = require('cheerio');
const axios = require('axios');

const baseURL = 'http://www.aruodas.lt/butu-nuoma/vilniuje';

const parseRow = html => {
  const $ = cheerio.load(html, {
    decodeEntities: false,
  });
  const address = $('.list-adress a').html() || '';
  const price = $('.list-adress .price .list-item-price').html() || '';
  const img = $('.list-img .list-photo a img').attr('src') || '';
  const rooms =
    $('.list-RoomNum')
      .text()
      .trim() || '';
  return {
    address: address === '' ? '' : address.replace('<br>', ', '),
    price: price,
    img: img,
    rooms: rooms,
  };
};

const getAllAds = async () => {
  let list = [];
  const response = await axios.get(
    `${baseURL}/puslapis/1?FRoomNumMin=1&FRoomNumMax=2`
  );
  const $ = cheerio.load(response.data);
  $('.list-search .list-row').each((i, elm) => {
    $('.list-adress', elm).hasClass('list-adress') //eslint-disable-line
      ? list.push(parseRow(elm))
      : undefined;
  });
  return list;
};

module.exports = {
  parseRow,
  getAllAds,
};
