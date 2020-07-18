import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      email: null,
      token: null,
    },
    bookApiInfo: [
      {
        title: "bookName",
        description: "Get book data with book name.",
        code: "http://localhost:3030/api/books/{{Book_Name}}",
        exampleQuery: "http://localhost:3000/api/books/Otomatik_Portakal",
        alert: "bookName",
        exampleResult: `[
    {
        "properties": {
            "Category": [
                "Bilim-Kurgu",
                "Dünya Klasikleri",
                "Edebiyat",
                "Psikoloji",
                "Roman"
            ],
            "likeCount": 5,
            "readCount": 18,
            "explanation": "Tüm hayvanların en zekisi, iyiliğin ne demek olduğunu bilen insanoğluna sistematik bir baskı uygulayarak onu otomatik işleyen bir makine haline getirenlere kılıç kadar keskin olan kalemimle saldırmaktan başka hiçbir şey yapamıyorum...\n...\nCockney dilinde (İngiliz argosu) bir deyiş vardır. \"Uqueer as as clockwork orange\". Bu deyiş, olabilecek en yüksek derecede gariplikleri barındıran kişi anlamına gelir. Bu çok sevdiğim lafı, yıllarca bir kitap başlığında kullanmayı düşünmüşümdür. Bir de tabii Malezyada \"canlı\" anlamına gelen \"orang\" sözcüğü var. Kitabı yazmaya başladığımda, rengi ve hoş bir kokusu olan bir meyvenin kullanıldığı bu deyişin, tam da benim anlatmak istediğim duruma, Pavlov kanunlarının uygulanmasına dayalı bir hikâyeye çok iyi oturduğunu düşündüm...\n-Anthony Burges-\n\nKarabasan gibi bir gelecek atmosferi... Geceleyin sokaklara dehşet saçan, yaşamları şiddet üzerine kurulu gençler... Sosyal kehanet? Kara mizah? Özgür iradenin irdelenişi?.. Otomatik Portakal bunların hepsidir. Aynı zamanda hayranlık verici bir dilsel deneydir, çünkü Burgess antikahramanı için yeni bir dil yaratır: Yakın geleceğin argosu \"nadsat\"ı.\n\n... ve Stanley Kubrickin muhteşem film uyarlaması, yirminci yüzyılın kült eserlerinden biri olan bu romanın şöhretini pekiştirmiştir...\n ",
            "printingDate": "24 Nisan 2019",
            "bookName": "Otomatik Portakal",
            "pageNum": 176,
            "bookLang": "Türkçe",
            "bookId": "5909",
            "ISBN": "9789944885706",
            "authorName": "Anthony Burgess",
            "EdebiyatGenre": 0.1,
            "name": "Otomatik Portakal",
            "RomanGenre": 0.87,
            "DunyaKlasikleriGenre": 0.21
        }
    }
]`,
      },
      {
        title: "bookISBN",
        description: "Get book data with book ISBN number.",
        code: "http://localhost:3030/api/books/ISBN/{{Book_ISBN_Number}}",
        exampleQuery: "http://localhost:3000/api/books/ISBN/9786053606116",
        exampleResult: `[
    {
        "properties": {
            "Category": [
                "Dünya Klasikleri",
                "Edebiyat",
                "Hikaye (Öykü)"
            ],
            "HikayeGenre": 0.24,
            "likeCount": 18,
            "readCount": 60,
            "explanation": "Satranç sonsuz eski, ama aynı zamanda sonrasız yenidir; kuruluşu mekanik, ancak sadece hayalgücü ile etkilidir; geometrik açıdan sabit bir alanla sınırlı olmakla birlikte kombinasyonlarında sınırsızdır, sürekli kendini geliştiren, ancak yine de verimsiz, hiçbir yere götürmeyen bir düşünme eylemidir; hiçbir şey hesaplamayan bir matematik, esersiz bir sanat, temelsiz bir mimaridir.\n\nStefan Zweig'ın, 1942 yılında, Hitler iktidarından kaçarak sürgün hayatı yaşadığı Buenos Aires'te yayımladığı Satranç adlı romanı, hem yazarın intiharından önce bıraktığı bir veda mektubu hem de doğrudan Nazizm'i hedef aldığı tek kurmaca eseridir. New York'tan Buenos Aires'e yapılan bir gemi yolculuğunda, dünya satranç şampiyonu Mirko Czentovic, kendisi için beklenmedik bir rakip olan Dr. B. ile karşılaşır. İsimsiz bir amatör olan bu gizemli rakibin satrançla tanışmasının olağanüstü bir hikâyesi vardır. Bir Nazi kurbanı olan Dr. B., o kara günlerde sadece satranç sayesinde ayakta kalabilmiştir.\n\nHikâyenin diğer kahramanı Czentovic ise iletişim kurmakta zorlanan, yaşamında satranç dışında hiçbir şey olmayan, kazanmaya kurulu bir saat, soğuk, küstah, kuralcı, yüzeysel, kültürsüz, karacahil bir \"dahi\"dir. Bu kısa anlatıda, Zweig'ın tüm izleklerini bulmak mümkün: dünün dünyasından bugünün dünyasına geçiş, marazi tutkular, sapkın zekâlar, felaketlerini yaşamları boyunca taşıyan bireyler, fazişm ve kaba şiddet karşısında Avrupa'nın ve dünyanın kaderi…\n ",
            "pageNum": 77,
            "printingDate": "13 Şubat 2019",
            "bookName": "Satranç",
            "bookLang": "Türkçe",
            "bookId": "1103",
            "ISBN": "9786053606116",
            "CocukGenre": 0.23,
            "authorName": "Stefan Zweig",
            "EdebiyatGenre": 0.17,
            "name": "Satranç",
            "DunyaKlasikleriGenre": 0.23
        }
    }
]`,
      },
    ],
  },
  getters: {
    userInfoGetters(state) {
      return state.userInfo;
    },
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    setUserInfo({ commit }, payload) {
      commit("SET_USER_INFO", payload);
    },
  },
  modules: {},
});
