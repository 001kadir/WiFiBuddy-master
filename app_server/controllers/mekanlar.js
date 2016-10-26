module.exports.anasayfa = function(req, res){
  res.render('mekanlar-liste', { title: 'Anasayfa' });
};
module.exports.mekanbilgisi = function(req, res){
  res.render('mekan-detay', { title: 'Mekan Bilgileri' });
};
module.exports.yorumekle = function(req, res){
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
};