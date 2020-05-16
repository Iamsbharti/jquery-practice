$(document).ready(() => {
  let txt = $(".heading").html(); //get html content
  console.log(`heading text${txt}`);
  let sub_para = $(".paragraph #sub-para").text(); //get text value from an element
  console.log(`sub-para ${sub_para}`);

  let src_attr = $(".my-image").attr("src"); //get attribute of an element
  console.log(`src ${src_attr}`);

  let new_subpara = `Hey I am not sure what went wrong with the authentication project ,I dropped it
                    even this time too i couldn't make the most of the pagination`;
  $("#sub-para").text(new_subpara); //change content of html content
  console.log(`text/val-${$("#sub-para").val()}`);
  $(".my-image").attr("src", "pic1.jpg"); //set src attribute

  $(".paragraph").append("Some extra skills??"); //add at end of the element
  $(".paragraph").prepend("prepend text"); //add at start of the element

  //$('#sub-head').remove() //remove the element from dom

  $("#sub-head").empty(); //empty the contents of the element

  //event handlers
  $("#buttonId").click(() => {
    $("#sub-para").addClass("big-font");
  });

  $("#anchor").dblclick(() => {
    $("#sub-para").css("color", "red");
  });

  $("#image").hover(() => {
    $("#image").hide("5000");
  });
  console.log($("a").parent().children());
});
