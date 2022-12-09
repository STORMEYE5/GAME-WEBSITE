<?php
    //Include the PHP functions to be used on the page
    include('common.php');

    //Output header
    output_header("GAME");

    //Output Navigation bar
    output_navbar_first();
    outputNavigation("GAME");
    output_navbar_second();
?>
	
	<!-- Contents of the page -->
    <h1 class="text" id="welcome-text">WELCOME</h1>

    <canvas id="myCanvas" height="700" width="700"></canvas>
    <canvas id="myCanvas2" height="700" width="700"></canvas>
    <canvas id="myCanvas3" height="700" width="700"></canvas>

    <button id="click" type="button" onclick="update()">ROLL DICE</button>
    <div id="game_score1" class="score_display">score</div>
    <div id="game_score2" class="score_display">score</div>
    <div class="property_card">
        <div class="property_colour">PROPERTY</div>
        <button class="buy" onclick="buy()">BUY</button>
    </div>

    <script type="text/javascript" src="../JavaScript/game.js"></script>

<?php
    //Output footer
    output_footer();

    //Output the end
    output_tail();
?>
