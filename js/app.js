const questionList = [
new Question("1-Hangisi Javascript paket yönetim uygulamasıdır?",{a:"Node.js",b:"Typescript",c:"Nuget",d:"Npm"},"d"),
new Question("2-Hangisi frontend kapsamında değerlendirilmez?",{a:"css",b:"html",c:"javascript",d:"sql"},"d"),
new Question("3-Hangisi backend kapsamında değerlendirilir?",{a:"Node.js",b:"Typescript",c:"Nuget",d:"Npm"},"a"),
new Question("4-Hangisi Javascript programlama dilini kullanmaz?",{a:"react",b:"angular",c:"vue.js",d:"asp.net"},"d"),
new Question("5-Javascript'te bir değişkeni tanımlamak için hangi anahtar kelime kullanılır?",{a:"hepsi",b:"let",c:"const",d:"var"},"a"),
new Question("6-Javascript'te bir fonksiyon nasıl tanımlanır?",{a:"function myFunc() {}",b:"func myFunc[]",c:"def myFunc()",d:"function:myFunc()"},"a"),
new Question("7-Javascript'te bir sınıf nasıl tanımlanır?",{a:"define class MyClass()",b:"function class MyClass() {}",c:"class MyClass {}",d:"object MyClass = {}"},"c"),
new Question("8-JavaScript’te constructor fonksiyonunun görevi nedir?",{a:"Bir sınıfın (class) özelliklerini ve metotlarını tanımlar.",b:"Sınıftan oluşturulan her yeni nesnenin (instance) başlangıç değerlerini ayarlamak için kullanılır.",c:"Programın çalışmasını başlatır.",d:"Bir sınıfı miras almak için kullanılır."},"b"),
new Question("9-JavaScript'te 'undefined' ve 'null' arasındaki fark nedir?",{a: "İkisi tamamen aynıdır, sadece farklı yazılır.",b:"'null' sistem tarafından atanır, 'undefined' kullanıcı tarafından atanır.",c:"'undefined' bir değişken tanımlanmış ama değer atanmamış halidir, 'null' ise bilinçli olarak boş değer atandığını belirtir.",d:"'undefined' sadece sayılar için kullanılır."},"c"),
new Question(
  "10- Aşağıdaki kodun çıktısı nedir?\n\nlet numbers = [10, 20, 30];\nconsole.log(numbers[1]);",
  {
    a: "10",
    b: "20",
    c: "30",
    d: "undefined"
  },
  "b"
),

];

const quiz = new Quiz(questionList);
const ui = new UI();

ui.btnStart.addEventListener("click",function(){
    ui.quiz_box.classList.add("active");
    ui.button_box.classList.remove("active");
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayısınıGoster(quiz.questionIndex + 1 , quiz.questions.length);

}) 


ui.btnNext.addEventListener("click",function(){
    if (quiz.questions.length != quiz.questionIndex){
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayısınıGoster(quiz.questionIndex + 1 , quiz.questions.length);
    }else {
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.skoruGoster(quiz.dogruCevapSayısı , quiz.questions.length);
    }


   
});

function optionSelected(e) {
    let selectedElement = e.target;

    if(selectedElement.nodeName == "SPAN"){
       selectedElement = selectedElement.parentElement;
    }

    const cevap = (e.target.textContent[0]);
    const question = quiz.soruGetir();
    
    if(question.cevabıKontrolEt(cevap)) {
          quiz.dogruCevapSayısı += 1 ;
          selectedElement.classList.add("correct");
          selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
    }else {
        selectedElement.classList.add("incorrect");
        selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    }
    quiz.questionIndex += 1;
    ui.disableAllOption();
}

ui.btnQuit.addEventListener("click",function(){
      window.location.reload();
});

ui.btnReplay.addEventListener("click",function(){
       quiz.questionIndex = 0;
       quiz.dogruCevapSayısı = 0;
    
       ui.btnStart.click();
       ui.score_box.classList.remove("active");
});