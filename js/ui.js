function UI(){
    this.quiz_box = document.querySelector("#quiz-box");
    this.button_box = document.querySelector("#button-box");
    this.score_box = document.querySelector("#score-box");
    this.body = document.querySelector("#quiz-box #body");
    this.correctIcon = '<i class="bi bi-check-circle"></i>';
    this.inCorrectIcon = '<i class="bi bi-x-circle"></i>';
    this.btnStart = document.querySelector(".btn-start");
    this.btnNext = document.querySelector(".btn-next");
    this.btnReplay = document.querySelector(".btn-replay");
    this.btnQuit = document.querySelector(".btn-quit");

}


UI.prototype.soruGoster = function(question){
    this.body.innerHTML = "";
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-boy");

    const title = document.createElement("h5");
    title.classList.add("question-title");
    title.textContent = question.soruMetni;

    const optionList = document.createElement("div");
    optionList.classList.add("option-list");

    for(let [key,value] of Object.entries(question.cevapSecenekleri)) {
           const option = document.createElement("div");
           option.classList.add("option");
           option.addEventListener("click",optionSelected);

           const span = document.createElement("span");
           span.textContent = key + ")" + value 

           option.appendChild(span);
           optionList.appendChild(option);
    }

    cardBody.appendChild(title);
    cardBody.appendChild(optionList);

    this.body.appendChild(cardBody);

}

UI.prototype.disableAllOption = function(){
    const options = document.querySelectorAll(".option");
    for(let option of options) {
        option.classList.add("disabled");
    }
}

UI.prototype.soruSayısınıGoster = function(soruSırası,toplamSoru){
    const etiket = `<span class="badge text-bg-danger"> ${soruSırası} / ${toplamSoru}</span>`;
    document.querySelector(".question-index").innerHTML = etiket;
}

UI.prototype.skoruGoster = function(dogruCevap, toplamSoru) {
    const etiket = `Toplam ${toplamSoru} soruda ${dogruCevap} doğru cevap verdiniz. `;
    document.querySelector(".score-text").innerHTML = etiket;
}