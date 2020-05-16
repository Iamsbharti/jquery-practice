$(document).ready(() => {
  $("#btnShow").click(() => {
    showData();
  });
  $("#clearData").click(() => {
    clearData();
  });
});
let showData = () => {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:3400/astronouts",
    success: (data) => {
      console.log(data);
      let astro = data.people;

      for (ast of astro) {
        let row = `<div class="row">
                      <div class="col">${ast.name}</div>
                      <div class="col">${ast.craft}</div>
                   </div>
                   `;
        $("#showData").append(row);
      }
    },
  });
};
let clearData = () => {
  console.log("clear");
  $("#data").children().attr("style", "display: none");
};
