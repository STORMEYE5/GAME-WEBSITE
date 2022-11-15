<?php
    //Include the PHP functions to be used on the page
    include('common.php');

    //Output header
    output_header("MONOPOLY");

    //Output Navigation bar
    output_navbar_first();
    outputNavigation("MONOPOLY");
    output_navbar_second();
?>

    <!-- Contents of the page -->
    <div class="small-game-box">
        <a class='game-link' href="game.php">
            <div class="title">GAME</div>
        </a>
    </div>

    <div class="small-leaderboard-box">
        <a class='game-link' href="leaderboard.php">
            <div class="title">LEADERBOARD</div>
        </a>
    </div>

<?php
    //Output footer
    output_footer();

    //Output the end
    output_tail();
?>