// Airport Map demo

const myGroup = d3.select('#chart')
  .append('g')
    .attr('class', 'myGroup');


// Scales for easy display of latitude and longitude
const lon = d3.scaleLinear()
  .domain([-180, 180])
  .range([0, 800]);


const lat = d3.scaleLinear()
  .domain([90, -90])
  .range([0, 400]);


// Color scale
const color = d3.scaleLinear()
  .domain([0, 10000])
  .interpolate(d3.interpolateHcl)
  .range([d3.rgb("#007AFF"), d3.rgb('#FFF500')]);

const zoomCallback = group =>
() => group.attr('transform', d3.event.transform)
const zoomBehavior = d3.zoom()
 .scaleExtent([1, 20])
.on('zoom', zoomCallback(myGroup))

d3.select('#chart')
.call(zoomBehavior);
// The data join
// (Notice the slightly different syntax here: we're making more use
// of JavaScript 2015 syntax in orde to make our code cleaner
// We also adopt a functional style, hence we pass global variables as
// function parameters to avoid to make our functions pure)

const draw = (group, lon, lat, col) =>
  data => {
    group
      .selectAll('circle')
      .data(data)

    // enter section
    .enter()

      // one circle per airport
      .append('circle')
      .attr('cx', d => lon(d.longitude))
      .attr('cy', d => lat(d.latitude))
      .attr('r', 2)
      .attr('fill', d => color(parseInt(d.altitude)))

      // tooltip
      .append('title')
        .text(d => `${d.name} (${d.iata_faa}, ${d.country})`);

const t = d3.transition()
.duration(10000)
.ease(d3.easeQuadIn);
const animate = () =>
        group
        .selectAll('circle')
        .transition(t)
        .attr('r', 0)
        .attr('cx', d => Math.random() * 800)
        .attr('cy', d => Math.random() * 500);

        d3.select('svg').on('click', animate);
}


// read file and draw its contents
d3.csv('airports.csv', draw(myGroup, lon, lat, color));
