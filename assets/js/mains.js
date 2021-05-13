//Bot caché
$( function(){
  $("#pierreMonster").hide();
  $("#feuilleMonster").hide();
  $("#ciseauxMonster").hide();
  var gesteMonsterPierre = $("#pierreMonster");
  var gesteMonsterFeuille = $("#feuilleMonster");
  var gesteMonsterCiseaux = $("#ciseauxMonster");
  var scoreElementUser = $('#scoreNumberUser');
  var scoreElementMonster = $("#scoreNumberMonster");
  var scoreNumberUser = 0;
  var scoreNumberMonster = 0;
  var round = 0;

let startChoice;
let userAnswer = $("#userAnswer");
// drag and drop
  $(".gesteUser").draggable({
    start: function() {
      startChoice = $(this).attr('id');
      console.log(startChoice);
    },
    snap: '#cercleUser',
    snapMode: 'inner',
    snapTolerance: 50,
    revert: true
  });

  $("#cercleUser").droppable({
      drop: function (event, ui) {
        $(userAnswer).attr("src", ui.draggable.attr("src"));
      }

  });
   
  //Aléatoire 
  function randomNumber(max){
      return Math.floor((Math.random()*max)+1) ;
  }

  // On drop event
  $("#cercleUser").on("drop", function() {
    round++;
    $("#roundNumber").text(round);
    let answerMonster = showMonster();

    console.log(startChoice);
        switch (startChoice) {
          case "pierreUser":
            if (answerMonster == 1) {
              console.log("equality");
              $("#cercleMonster" ).css( "border" , "5px solid #FF0BA2" );
              $("#cercleUser" ).css( "border" , "5px solid #FF0BA2" );

            }
            else if (answerMonster == 2) {
              console.log("loose");
              scoreNumberMonster++;
              $("#cercleMonster" ).css( "border" , "5px solid #FF0BA2" );
              $("#cercleUser" ).css( "border" , "none" );
            }
            else {
              console.log("win");
              scoreNumberUser++;
              $("#cercleMonster" ).css( "border" , "none" );
              $("#cercleUser" ).css( "border" , "5px solid #FF0BA2" );
            }
          break;

          case "feuilleUser":
            if (answerMonster == 1) {
              console.log("win");
              scoreNumberUser++;
              $("#cercleMonster" ).css( "border" , "none" );
              $("#cercleUser" ).css( "border" , "5px solid #FF0BA2" );
            }
            else if (answerMonster == 2) {
              console.log("equality");
              $("#cercleMonster" ).css( "border" , "5px solid #FF0BA2" );
              $("#cercleUser" ).css( "border" , "5px solid #FF0BA2" );
            }
            else {
              console.log("loose");
              scoreNumberMonster++;
              $("#cercleMonster" ).css( "border" , "5px solid #FF0BA2" );
              $("#cercleUser" ).css( "border" , "none" );
            }
          break;

          case "ciseauxUser":
            if (answerMonster == 1) {
              console.log("loose");
              scoreNumberMonster++;
              $("#cercleMonster" ).css( "border" , "5px solid #FF0BA2" );
              $("#cercleUser" ).css( "border" , "none" );
            }
            else if (answerMonster == 2) {
              console.log("win");
              scoreNumberUser++;
              $("#cercleMonster" ).css( "border" , "none" );
              $("#cercleUser" ).css( "border" , "5px solid #FF0BA2" );
            }
            else {
              console.log("equality");
              $("#cercleMonster" ).css( "border" , "5px solid #FF0BA2" );
              $("#cercleUser" ).css( "border" , "5px solid #FF0BA2" );
            }
          break;
         
        }
        $(scoreElementUser).text(scoreNumberUser);
        $(scoreElementMonster).text(scoreNumberMonster);
  });
  

  function showMonster() {
    var randomGesteMonster = randomNumber(3)

    console.log(randomGesteMonster);

    if(randomGesteMonster == 1){
        $("#pierreMonster").show();
        $("#feuilleMonster").hide();
        $("#ciseauxMonster").hide();
    }
    if(randomGesteMonster == 2){
        $("#pierreMonster").hide();
        $("#feuilleMonster").show();
        $("#ciseauxMonster").hide();
    }
    if(randomGesteMonster == 3){
        $("#pierreMonster").hide();
        $("#feuilleMonster").hide();
        $("#ciseauxMonster").show();
    }

    return randomGesteMonster;
  }

});
    