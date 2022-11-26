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
    $links = array("LOGIN" => "login.php", "GAME" => "game.php", "LEADERBOARD" => "leaderboard.php");

    foreach ($links as $linkName => $linkAddress) {
      if ($linkName == $pageName) {
        echo <<< END
          <li><a class="active" href="$linkAddress">$linkName</a></li>
END;
      }
            
      else {
        echo <<< END
          <li><a href="$linkAddress">$linkName</a></li>
END;
      }    
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
END;
    $links_about = array(1 => "ABOUT US", 2 => "TERMS AND CONDITIONS", 3 => "CONTACT US");
    foreach($links_about as $number => $about_names) {
      switch ($number) {
        case 1:
          echo <<< END
          <li><a>$about_names</a></li>
END;
          break;
        case 2:
          echo <<< END
          <li><a>$about_names</a></li>
END;
          break;
        case 3:
          echo <<< END
          <li><a class="no-margin">$about_names</a></li>
END;
          break;
      }
    }
    echo <<< END
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

