<?php

// FUNCTION TO OUTPUT FILE HEADER
function output_header($title){
    echo <<<END
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>$title</title>
  <link rel="stylesheet" type="text/css" href="../Styles/mystyles.css">
</head>
<body>
END;
}

// FUNCTION TO OUTPUT FIRST PART OF NAVIGATION BAR
function output_navbar_first(){
    echo<<<END
  <header>
    <div class="container">
      <div class="hover-colour">
        <ul>
END;
}

// FUNCTION TO OUTPUT NAVIGATION LINKS
function outputNavigation($pageName)
{
    $linkNames = array("LOGIN", "GAME", "LEADERBOARD");
    $linkAddresses = array("login.php", "game.php", "leaderboard.php");
    for ($x = 0; $x < count($linkNames); $x++) {
        if ($linkNames[$x] == $pageName)
            echo <<< END
          <li><a class="active" href="$linkAddresses[$x]">$linkNames[$x]</a></li>
END;
        else
            echo <<< END
          <li><a href="$linkAddresses[$x]">$linkNames[$x]</a></li>
END;
    }
}

// FUNCTION TO OUTPUT SECOND PART OF NAVIGATION BAR
function output_navbar_second(){
    echo <<< END
        </ul>
      </div>
    </div>
  </header>

  <h1>
    <a href="monopoly.php">
      <img src="../Assets/Monopoly-Logo.png" alt="MONOPOLY LOGO" width="200" height="38.2">
    </a>
  </h1>
END;
}

// FUNCTION TO OUTPUT FOOTER OF PAGE
function output_footer(){
    echo <<< END
  <footer>
    <div class="container">
      <div class="box-end">
        <ul>
          <li><a>&copy;ALL RIGHTS RESERVED</a></li>
        </ul>
      </div>
      <div class="hover-colour">
        <ul class="hover-colour">
          <li><a href="about us.html">ABOUT US</a></li>
          <li><a>TERMS AND CONDITIONS</a></li>
          <li><a class="no-margin">CONTACT US</a></li>
        </ul>
      </div>
    </div>
  </footer>
END;
}

//FUNCTION TO OUTPUT FILE FOOTER 
function output_tail(){
    echo '</body>';
    echo '</html>';
}
?>

