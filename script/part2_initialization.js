//This file containt the function to initializae the page when window is loaded

window.addEventListener("DOMContentLoaded", function(){
    initializeOptions();
    this.localStorage.clear();

    document.getElementById("submitBtn").addEventListener("click", function(){
        storeFeedbackData();
        displayFeedbackSummary();
    })
})

function initializeOptions(){
    var feedbackOption =[
        {val:"Awesome", text: "Awesome"},
        {val:"Cool", text: "Cool"},
        {val:"Fun", text: "Fun"},
        {val:"Not Bad", text: "Not Bad"}
    ];

    let select = document.getElementById("feedback_id");
    for(let feedbck of feedbackOption){
        let options = document.createElement('option');
        options.text = feedbck.text;
        options.value = feedbck.val;
        select.append(options);
    }

    let target = document.getElementById("feedback-list");

    let div = document.createElement('div');
    div.id = "accumulate";

    target.after(div);
}