function Quiz(questions){
    this.questionIndex = 0;
    this.questions = questions ;
    this.dogruCevapSayısı = 0;
}

Quiz.prototype.soruGetir = function(){
    return this.questions[this.questionIndex];
}