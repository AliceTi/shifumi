//Bot caché


$( function(){
  $("#pierreMonster").hide();
  $("#feuilleMonster").hide();
  $("#ciseauxMonster").hide();
  $("#monster1").show();
  $("#monster2").hide();
  $("#monster3").hide();
  $("#modalClash").hide();
  var gesteMonsterPierre = $("#pierreMonster");
  var gesteMonsterFeuille = $("#feuilleMonster");
  var gesteMonsterCiseaux = $("#ciseauxMonster");
  var scoreElementUser = $('#scoreNumberUser');
  var scoreElementMonster = $("#scoreNumberMonster");
  var scoreNumberUser = 0;
  var scoreNumberMonster = 0;
  var round = 1;

let startChoice;
let userAnswer = $("#userAnswer");


$("body").mousedown(function () {
  
  document.getElementById('audio').play();

});

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


        var lifeUser1 = $("#lifeUser1");
        var lifeUser2 = $("#lifeUser2");
        var lifeUser3 = $("#lifeUser3");
        var lifeMonster1 = $("#lifeMonster1");
        var lifeMonster2 = $("#lifeMonster2");
        var lifeMonster3 = $("#lifeMonster3");
        var pourcentageVictoire = pourcentage();

        if(scoreNumberUser == 1){
          lifeMonster3.removeClass("fas").addClass("far");
        }else if(scoreNumberUser == 2){
          lifeMonster2.removeClass("fas").addClass("far");
        }else if(scoreNumberUser == 3){
          $("#pseudoMonster").text("Adrien")
          $("#monster1").hide();
          $("#monster2").show();
          $("#monster3").hide();
          lifeMonster3.removeClass("far").addClass("fas");
          lifeMonster2.removeClass("far").addClass("fas");
        }
        if(scoreNumberUser == 4){
          lifeMonster3.removeClass("fas").addClass("far");
        }else if(scoreNumberUser == 5){
          lifeMonster2.removeClass("fas").addClass("far");
        }else if(scoreNumberUser == 6){
          $("#pseudoMonster").text("Kimberley")
          $("#monster1").hide();
          $("#monster2").hide();
          $("#monster3").show();
          lifeMonster3.removeClass("far").addClass("fas");
          lifeMonster2.removeClass("far").addClass("fas");
        }
        if(scoreNumberUser == 7){
          lifeMonster3.removeClass("fas").addClass("far");
        }else if(scoreNumberUser == 8){
          lifeMonster2.removeClass("fas").addClass("far");
        }else if(scoreNumberUser == 9){
          lifeMonster1.removeClass("fas").addClass("far");
          $("#monster1").hide();
          $("#monster2").hide();
          $("#monster3").hide();
          $("#modalClash").hide();
          $("#modalWin").show();
          $("#pourcentageVictoire").text(pourcentageVictoire);
        }

        if(scoreNumberMonster==1){
          lifeUser3.removeClass("fas").addClass("far");
        }else if(scoreNumberMonster==3){
            lifeUser2.removeClass("fas").addClass("far");
        }else if(scoreNumberMonster>=6){
          lifeUser1.removeClass("fas").addClass("far");
          $("#modalClash").hide();
          $("#modalLoose").show()
        };

        $(".close").on("click" , function(){
          $("#modalClash").hide();
        })
        
        if(round == 5){
          $("#modalClash").show()
          $("#textClash").text("\"Si tu penses pouvoir nous battre, tu te fourvoies jeune jouvenceau !\"");
        }
        else if(round == 10){
          $("#modalClash").show()
          $("#textClash").text("On commence à s'ennuyer ici, il serait temps d'en finir !");
        }
        else if(round == 15){
          $("#modalClash").show()
          $("#textClash").text("Tu veux pas demander à un adulte de venir t'aider ?");
        }
        else if(round == 20){
          $("#modalClash").show()
          $("#textClash").text("*le monstre baille bruyamment*");
        }
        else if(round == 25){
          $("#modalClash").show()
          $("#textClash").text("Bon, nous n'avons pas que ça à faire...");
        }
        else if(round == 30){
          $("#modalClash").show();
          $("#textClash").text("Je vois une lumière blanche !");
        }
  });
  //Pourcentage de victoire du joueur
  function pourcentage(){
    return Math.floor((scoreNumberUser*100)/round);
  };

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
    