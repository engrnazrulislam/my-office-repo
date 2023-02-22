var marks =[40, 50, 60, 70, 90, 76, 88]
console.log(marks[0])
for(var i=0; i<marks.length;i++)
{
    if(marks[i]>80 && marks[i]<=100)
    {
        console.log("Grade: A+ Marks=",marks[i])
    }
    else if(marks[i]>=70){
        console.log("Grade: A Marks=",marks[i])
    }
    else if(marks[i]>=60){
        console.log("Grade: A- Marks=",marks[i])
    }
    else if(marks[i]>=50){
        console.log("Grade: B Marks=",marks[i])
    }
    else if(marks[i]>=40){
        console.log("Grade: C Marks=",marks[i])
    }
    else if(marks[i]>=33){
        console.log("Grade: D Marks=",marks[i])
    }
    else
        console.log("Grade: F Marks=",marks[i])
}