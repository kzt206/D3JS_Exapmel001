const w = 300;
const h = 200;

let svg = d3.select("#Graph")
    .attr("width", w)
    .attr("height", h);

d3.select("body")
    .append("p")
    .text("New Paragraph!");

const datasets = [50, 150, 250, 350, 450];
svg.selectAll("rect")
    .data(datasets)
    .enter()
    .append("rect")
    .attr("x", 20)
    .attr("y", 30)
    .attr("width", 10)
    .attr("height", 5)
    .attr("fill", "blue");