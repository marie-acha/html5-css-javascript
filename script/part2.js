function storeFeedbackData(){
    let myform = document.myform;

    let validityFName = myform.elements["firstName"].checkValidity();
    let validityLName = myform.elements["lastName"].checkValidity();
    let validityCourse = myform.elements["courseName"].checked = true;
    let validityFeedback = myform.elements["feedback"].checkValidity();

    let errorDiv = document.getElementById("errorMessage");

    if(validityFName && validityLName && validityCourse && validityFeedback){
        //all inputs are valid
        errorDiv.innerText = "";
        errorDiv.style.visibility = "hidden";

        //create new object to store the feedback
        //add it to the FeedbackData array
        let feedbackObject = new Feedback();
        feedbackObject.firstName = myform.elements["firstName"].value;
        feedbackObject.lastName = myform.elements["lastName"].value;
        feedbackObject.courseName = myform.elements["courseName"].value;
        feedbackObject.feedback = myform.elements["feedback"].value;

        //check the localstorage to get current data
        let feedbackData = JSON.parse(localStorage.getItem("feedbackData") || "[]");
        feedbackData.push(feedbackObject);

        //update the storage
        localStorage.setItem("feedbackData",JSON.stringify(feedbackData));

        console.log(feedbackData);
    }else{
        //we will display error message
        let errorText = "Please enter all input correctly";
        errorDiv.innerText = errorText;
        errorDiv.style.visibility = "visible";
    }
    
}

function displayFeedbackSummary(){
    let target = document.getElementById("accumulate");
    if(document.getElementById("data_heading")){
        var feedbackList = document.getElementById("list");
    }else{
        //we will create the elements
        // the <h2> with id data_heading
        let heading = document.createElement("h2");
        heading.id = "data_heading";
        heading.innerText = "Feedback List";
        target.append(heading);

        var feedbackList = document.createElement("ol");
        feedbackList.id = "list";
        heading.after(feedbackList);
        
    }

    let feedbackData = JSON.parse(localStorage.getItem("feedbackData") || "[]");
    for(fdbck of feedbackData){
        let feedbackObject = Object.assign(new Feedback(), fdbck);

        let userName = document.createElement("strong");
        userName.innerText = feedbackObject.getFullName();

        let text = " says that " + feedbackObject.courseName + " is " + feedbackObject.feedback;

        var li = document.createElement("li");
        li.append(userName, text)
    }

    feedbackList.append(li);
}