//questa variabile abilita il prototiping di vue
Vue.config.devtools = true;

// definisco l'oggetto vue avendo gia caricato la sua cdn
var app = new Vue({
    //questo è l 'elemento dove si aggancia vue, tutto quello scritto in questo id di nome app verra gestito da vue
    el: '#app',

    //qui è dove creiamo definiamo le pseudo variabili di vue, infatti non sono delle vere variabili ma oggetti che vue definisce
    //e gestisce
    data: {
        meno: '-',
        piu: '+',
        min: 0,
        max: 30,
        x: 0,
        y: 0,
        minDisable: true,
        maxDisable: false,
        contatore: 10,
        bianco: 'bianco',
        icone_nere: 'icone_nere',
    },

    //i methods sono dove definiamo le nostre funzioni e possono essere benissimamente scritte in es6
    methods: {

        // questa funzione incrementa e decrementa il contatore e verifica che il numero non sia maggiore di 30 e minore di 0
        count(ele) {
            if( ele === this.piu) {
                if( this.contatore < this.max) {
                    this.contatore++;
                }
            }else if (ele === this.meno) {
                if( this.contatore > this.min) {
                    this.contatore--;
                }
            }

            if( this.contatore >= 30) {
                this.maxDisable = true;
                this.minDisable = false;
            } else if( this.contatore === 0 ) {
                this.maxDisable = false;
                this.minDisable = true;
            } else {
                this.maxDisable = false;
                this.minDisable = false;
            }

            console.log(`valore contatore = ${ele} ${this.contatore}`)
        },

        registroMouse(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },


        // questa funzione va lo switch di colori su delle classi impostate, in questo caso cambia le icone ed il wrapper di vue
        dark_mode() {
            if( this.bianco === 'bianco') {
                this.bianco = 'nero';
                this.icone_nere = 'icone_bianche'

            }else {
                this.bianco = 'bianco';
                this.icone_nere = 'icone_nere'
            }
        }

        },

    // il mounted è la gestione dello stato, qui possiamo anche modificare i parametri che abbiamo definito precedentemente,
    // il mounted è il constructor di delle classi di js
    mounted: function () {
        console.log('stato montato correttamente')
        this.contatore = 15;
        this.minDisable = true;
        this.maxDisable = false;
    }

})



