// CHAPTER 14-16

// Q1
// var studentName = [];

// // Q2
// var studentName = {};

// // Q3
// var studentName = ["Ahmed", "Saim", "Zaid","Saad"]

// Q4
// var studentName = [7, 10, 22,77]

// Q5
// var studentName = [true, false]

// Q6
// var studentName = ["Ahmed",true,7,"Saim",47,false,"Zaid",86,"Saad"]

// Q7
// var QualificationsInPakistan = [ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M", "Phil", "PhD"]

// document.write("<h1>" + "Qualifications:" + "</h1><br>" )
// document.write(QualificationsInPakistan[0] + "<br>" )
// document.write(QualificationsInPakistan[1] + "<br>" )
// document.write(QualificationsInPakistan[2] + "<br>" )
// document.write(QualificationsInPakistan[3] + "<br>" )
// document.write(QualificationsInPakistan[4] + "<br>" )
// document.write(QualificationsInPakistan[5] + "<br>" )
// document.write(QualificationsInPakistan[6] + "<br>" )
// document.write(QualificationsInPakistan[7] + "<br>" )
// document.write(QualificationsInPakistan[8])

// Q8
// var studentNames = [prompt("Student 1 Name?"), prompt("Student 2 Name?"), prompt("Student 3 Name?")]
// var studentScores = [prompt("Student 1 Score?"), prompt("Student 2 Score?"), prompt("Student 3 Score?")]

// totalScore = 500
// persentage1 = (studentScores[0] / totalScore) * 100
// persentage2 = (studentScores[1] / totalScore) * 100 
// persentage3 = (studentScores[2] / totalScore) * 100

// document.write("Score of " + studentNames[0] + " is " + studentScores[0] + " Percentage: " + persentage1 + "%<br>")
// document.write("Score of " + studentNames[1] + " is " + studentScores[1] + " Percentage: " + persentage2 + "%<br>")
// document.write("Score of " + studentNames[2] + " is " + studentScores[2] + " Percentage: " + persentage3 + "%")

// Q9

// var colors = [" Red ", " Green", " Blue"];
// // A
// var addcolorstart = prompt("what color you want to Add to the beginning?")

// if(addcolorstart){
//     colors.unshift(addcolorstart)
// }
// document.write("<b>A</b> " + colors  + "<br>")
// // B
// var addcolorend = prompt("what color you want to Add to the end?")

// if(addcolorend){
//     colors.push(addcolorend)
// }
// document.write("<b>B</b> " + colors + "<br>")

// // C
// colors.unshift("Orange", "Yellow")
// document.write("<b>C</b> " + colors + "<br>");

// // D
// colors.shift()
// document.write("<b>D</b> " + colors + "<br>")

// // E
// colors.pop()
// document.write("<b>E</b> " + colors + "<br>")

// // F
// var colorindex = prompt("At which index you want to Add color?")
// var colorAdd = prompt("Which color you want to Add color?")

// colors.splice(colorindex, 0 ,colorAdd)
// document.write("<b>F</b> " + colors + "<br>")

// // G
// var ColorIndexDelete = prompt("At which index you want to Delete color?")
// var ColorDelete = prompt("How many colors you want to delete?")

// colors.splice(ColorIndexDelete,ColorDelete)
// document.write("<b>G</b> " + colors + "<br>")

// Q10
// var studentScores = [320, 230, 480, 120];

// document.write("<b>Score of Student: </b>" + studentScores + "<br>")

// studentScores.sort()

// document.write("<b>Ordered Score of Student: </b>" + studentScores)

// 11
// var cities = ["Karachi"," Islamabad"," Quetta"," Lahore"," Peshawar"]

// var selectcities = cities.slice(2,5)
// document.write("<b>Cities list:</b><br>" + cities + "<br><br>");
// document.write("<b>Selected cities list:</b><br> " + selectcities);

// Q12
// var arr = ["This " ,  " is" ,  " my" ,  " cat"]

// document.write(arr[0], arr[1], arr[2], arr[3])

// Q15
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// document.write("<option>" + phoneManufacturers[0] + "</option>");
// document.write("<option>" + phoneManufacturers[1] + "</option>");
// document.write("<option>" + phoneManufacturers[2] + "</option>");
// document.write("<option>" + phoneManufacturers[3] + "</option>");
// document.write("<option>" + phoneManufacturers[4] + "</option>");
// document.write("<option>" + phoneManufacturers[5] + "</option>");
// document.write("</select>");