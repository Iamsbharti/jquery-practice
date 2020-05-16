let fbToken = "";
$(document).ready(() => {
  fbToken = prompt("Enter Your FB Token", "");
  if (fbToken === null || fbToken === "") {
    $("#error").text("Token Required");
  } else {
    getFbDetails();
  }
});
let getFbDetails = () => {
  $.ajax({
    type: "GET",
    dataType: "json",
    async: true,
    url: `https://graph.facebook.com/v7.0/me?fields=id%2Cname%2Cabout%2Cpicture%2Cquotes&access_token=${fbToken}`,

    success: (response) => {
      console.log(response);
      $("#username").text(response.name);
      $("#quote").text(response.quotes);
      $("#profile").attr("src", response.picture.data.url);
      $("#profile").attr("style", `width:${response.picture.data.width}`);
      $("#profile").attr("style", `height:${response.picture.data.height}`);
      $("#profile").attr("style", "height:40");
      $("#profile").attr("style", "width:40");
    },
    error: (error) => {
      $("#error").text(`Error Getting Response- ${error}`);
    },
  });
};
