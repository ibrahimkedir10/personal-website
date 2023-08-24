const Guess = {
   data() {
      return {
         //possible numbers
         numerals: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII",
            "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI", "XXII", "XXIII", "XXIV",
            "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX", "XXXI", "XXXII", "XXXIII", "XXXIV",
            "XXXV", "XXXVI", "XXXVII", "XXXVIII", "XXXIX", "XL", "XLI", "XLII", "XLIII", "XLIV", "XLV",
            "XLVI", "XLVII", "XLVIII", "XLIX", "L", "LI", "LII", "LIII", "LIV", "LV", "LVI", "LVII",
            "LVIII", "LIX", "LX", "LXI", "LXII", "LXIII", "LXIV", "LXV", "LXVI", "LXVII", "LXVIII", "LXIX",
            "LXX", "LXXI", "LXXII", "LXXIII", "LXXIV", "LXXV", "LXXVI", "LXXVII", "LXXVIII", "LXXIX",
            "LXXX", "LXXXI", "LXXXII", "LXXXIII", "LXXXIV", "LXXXV", "LXXXVI", "LXXXVII", "LXXXVIII",
            "LXXXIX", "XC", "XCI", "XCII", "XCIII", "XCIV", "XCV", "XCVI", "XCVII", "XCVIII", "XCIX", "C"],

         //user tries
         tries: [],

         //user's current guess
         userguess: "",

         //target -- number user tries to guess
         target: 67,

         // game over display boolean
         display: false
      }
   }, //end data property 

   methods: {
      makeGuess: function (event) {
         alert("GUESS: " + this.userguess);
         let pos = this.numerals.indexOf(this.userguess);

         let userTry = { val: "", status: "" };

         if (pos + 1 < this.target) {
            alert("too low");
            userTry.status = "too low";
         }
         else if (pos + 1 > this.target) {
            alert("too high");
            userTry.status = "too high";
         }
         else {
            this.display = true;
            userTry.status = "got it";
         }
         userTry.val = this.userguess;

         //this.tries.push(this.userguess);
         this.tries.push(userTry);
      },
      startNew: function (event) {
         this.tries = [];  //clear out old tries
         this.display = false;
         this.userguess = "";  //clear out old guess
         this.target = Math.floor(Math.random() * this.numerals.length + 1); //generate new target
         alert(this.target);
      }
   }
} //end Vue object

Vue.createApp(Guess).mount('#guess')