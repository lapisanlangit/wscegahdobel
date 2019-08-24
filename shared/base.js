var moment = require('moment-timezone');

module.exports = {
    jamJakarta: moment().tz("Asia/Jakarta").format(),
    getJamJakarta: function () {
        var tgl = this.jamJakarta.substr(0, 10)
        var jam = this.jamJakarta.substr(11, 8)
        var gabung = tgl + " " + jam
        return gabung

    },

    getTglJakarta: function () {
        var tgl = this.jamJakarta.substr(0, 10)
        return tgl

    },
    buangTitik: function (nilai) {

        var strnilai = nilai.toLocaleString()
        return parseInt(strnilai.replace(/\./g, ''))

    },

    titiJadiKoma: function (nilai) {

        var strnilai = nilai.toLocaleString()
        return strnilai.replace(/\./g, ',')

    },

    getFirstWord: function (str) {

        var matches = str.match(/(\d+)/);
        return matches[0]

    },


//  mengubah tanggal dd-mm-yyyy menjadi yyyy-mm-dd
	setTglInsert:function(stgl) {
	  //01-05-2015
	  var str = stgl;
	  var xtahun =str.substr(6, 4);
	  var xbulan=str.substr(3, 2);
	  var xtgl=str.substr(0, 2);

	  return xtahun+'-'+xbulan+'-'+xtgl;
	}

    // getnmFile:function(param){
    //     var fpath = param;
    //     fpath = fpath.replace(/\\/g, '/');

    //     var fname = fpath.substring(fpath.lastIndexOf('/')+1, fpath.lastIndexOf('.'));

    //     return (fname);

    // }



}
