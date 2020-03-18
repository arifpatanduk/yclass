$(document).on("click", ".browse", function() {
  var file = $(this).parents().find(".file");
  file.trigger("click");
});
$('input[type="file"]').change(function(e) {
  var fileName = e.target.files[0].name;
  $("#file").val(fileName);

  var reader = new FileReader();
  reader.onload = function(e) {
    // get loaded data and render thumbnail.
    document.getElementById("preview").src = e.target.result;
  };
  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
});


$(document).on("click", ".copy-me", function(ev) {
  var $body = document.getElementsByTagName('body')[0];
  var rel = $(this).attr("rel");
  var text = $("#"+rel).text();
  var $tempInput = document.createElement('INPUT');
  $body.appendChild($tempInput);
  $tempInput.setAttribute('value',  text)
  $tempInput.select();
  document.execCommand('copy');
  $body.removeChild($tempInput);
  alert("Nomor rekening berhasil dicopy");
});

