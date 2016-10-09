var tol_target;
$(document).mouseover(function(event) {
  tol_target && $(tol_target).css("border", "");
  tol_target = event.target;
  $(tol_target).css("border", "1px blue dotted");
});

$(document).keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 32) { // 32:space bar, 17:control, 27:esc
    $(tol_target).css("background-color", "yellow");
    console.info(tol_target);
    return false;
  }
});
