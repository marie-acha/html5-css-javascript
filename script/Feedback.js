//This file declare the Feedback class

//class to store the feedback summary
class Feedback{
    constructor(first, last, course, feedbackOption){
        this.firstName = first;
        this.lastName = last;
        this.courseName = course;
        this.feedback = feedbackOption; 
    }

    getFullName(){
        return this.firstName.toUpperCase() + " " + this.lastName;
    }
}