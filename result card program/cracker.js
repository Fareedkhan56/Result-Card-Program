var totalMarks = 300;
alert("Total Marks Is : "+totalMarks);

var sub1 = +prompt("enter obtain of first subject");

var sub2 = +prompt("enter obtain of second subject");

var sub3 = +prompt("enter obtain of third subject");

var obtainedMarks = sub1+sub2+sub3;

var percentage = obtainedMarks/totalMarks*100;

if (percentage >= 80){
    document.write
    (`<h1 style='border: 2px solid blue; padding:100px'><center>
    Total Marks : ${totalMarks} </br>
    Marks Obtained : ${obtainedMarks} </br>
    Percentage : ${percentage}% </br>
    Grade : A-ONE </br>
    Remarks : Excellent
    </center></h1>`)
}
else if (percentage >= 70){
    document.write
    (`<h1 style='border: 2px solid blue; padding:100px'><center>
    Total Marks : ${totalMarks} </br>
    Marks Obtained : ${obtainedMarks} </br>
    Percentage : ${percentage}% </br>
    Grade : A </br>
    Remarks : Good
    </center></h1>`)
}
else if(percentage >= 60){
    document.write
    (`<h1 style='border: 2px solid blue; padding:100px'><center>
    Total Marks : ${totalMarks} </br>
    Marks Obtained : ${obtainedMarks} </br>
    Percentage : ${percentage}% </br>
    Grade : B </br>
    Remarks : You Need To Improve
    </center></h1>`)
}
else if(percentage < 60){
    document.write
    (`<h1 style='border: 2px solid blue; padding:100px'><center>
    Total Marks : ${totalMarks} </br>
    Marks Obtained : ${obtainedMarks} </br>
    Percentage : ${percentage}% </br>
    Grade : Fail </br>
    Remarks : Sorry
    </center></h1>`)
}
else {
    document.write("enter data")
}