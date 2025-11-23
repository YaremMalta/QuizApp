
function Question(soruMetni , cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri= cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Question.prototype.cevabıKontrolEt = function (cevap){
    return cevap === this.dogruCevap;
};


