import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        idealWeight: "",
        index: "",
        message: {
            title: "",
            content: ""
        }
    },
    getters: {
        getIdealWeight(state) {
            return state.idealWeight;
        },
        getIndex(state) {
            return state.index;
        },
        getMessage(state) {
            return state.message;
        }
    },
    mutations: {
        setIdealWeight(state, payload) {
            var newValue;
            if (payload.gender == "Kadin") {
                newValue = Math.floor(45.5 + (2.3 / 2.54) * (payload.size - 152.4));
            } else if (payload.gender == "Erkek") {
                newValue = Math.floor(50 + (2.3 / 2.54) * (payload.size - 152.4));
            }
            state.idealWeight = newValue;
            if (newValue > payload.weight) {
                state.message.title = "İdeal Kilonun Altındasın!";
                state.message.content = "İdeal kilonun altında kalmışsın ama yükselmen için yanındayız! Tek ihtiyacın biraz motivasyon biraz da düzenli ve dengeli beslenme. Biz de tam bunun için varız! Bizi takip et, senin için tüyolarımız var; birlikte başarabiliriz!"
            } else if (newValue < payload.weight) {
                state.message.title = "İdeal Kilonun Üzerindesin!";
                state.message.content = "Hedefe yakınsın! Önünde kısa bir yol var. Dengeli beslenme ve düzenli fiziksel aktivite ile tam 12'den en ideali vurabilirsin!";
            } else {
                state.message.title = "Kilonuz İdeal!";
                state.message.content = "Harikasın! Tam da ideal kilondasın! Şimdi sana düşen bunu korumak. Hareketi ihmal etmeden, düzenli ve dengeli beslenmeye ve bizi takip etmeye devam!";
            }
        },
        setIndex(state, payload) {
            var index = ((payload.weight / (payload.size * payload.size)) * 10000).toFixed(2);
            state.index = index;
        }
    },
    actions: {

    }
})

export default store;