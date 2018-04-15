//
// var myData = [23, 1, 49, 3, 39, 23, 55, 3, 55, 28, 17, 3];
var myGroup = d3.select("#chart")
 .append("g")
 .attr("class", "myGroup");

 // myData.forEach( (d, i) => {


function draw(group, data) {

  var join =
group
 .selectAll("rect")
 .data(data)

 join
 .enter()
   .append("rect")
   .attr("x", (d,i) => 50+50*i)
   .attr("y", (d,i) => 400-5*d)
   .attr("width", 50)
   .attr("height",  d => 5*d)

   join
   .attr("fill", "green")

   join
   .exit()
   .transition().attr("width", "0")
   .remove()
 }

 draw(myGroup, [23, 1, 49, 3, 39, 23, 55, 3, 55, 28, 17, 3]);
 draw(myGroup, [23, 1, 49, 3, 39, 23]);


 // });
 // });

// myGroup
// .append("circle")
// .attr("cx", 200)
// .attr("cy", 250)
// .attr("r", 50)
// .on("click", () => {
//   myGroup.select("rect").attr("fill", "blue")
// });
//
//
// d3.select("body").style("background-color", "white");
//
// myGroup
// .append("rect")
// .attr("x", 30)
// .attr("y", 40)
// .attr("width", 200)
// .attr("height", 200)

// var scale = d3.scaleLinear()
//   .domain([-100, 100])
//   .range([0, 400]);
//
//   var axis = d3.axisBottom(scale)
//   .ticks(10);
//
//   d3.select("#chart")
//   .append("g")
//     .attr("transform", "translate(50, 400)")
//     .call(axis);
//
//     var scaleY = d3.scaleLinear()
//     .domain([100, 0])
//     .range([0, 300]);
//
//     var axisY = d3.axisLeft(scaleY)
//      .ticks(10);
//
//      d3.select("#chart")
//      .append("g")
//        .attr("transform", "translate(50, 100)")
//        .call(axisY);
//
//        myGroup
//        .append("rect")
//        .attr("x", 50)
//        .attr("y", 250)
//        .attr("width", 100)
//        .attr("height", 150)



       d3.select("body").style("background-color", "white");
