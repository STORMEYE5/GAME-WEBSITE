<?php
    //Include the PHP functions to be used on the page
    include('common.php');

    //Output header
    output_header("LEADERBOARD");

    //Output Navigation bar
    output_navbar_first();
    outputNavigation("LEADERBOARD");
    output_navbar_second();
?>
	
	<!-- Contents of the page -->
    <div class="leaderboard-box">
        <div class="box-title">
            <div class="box-div">test</div>
            <div class="box-div">test2</div>
        </div>
    </div>
    
    <h1 class="text" id="welcome-text">WELCOME</h1>

    <script type="text/javascript"src="../JavaScript/leaderboard.js"></script>

<?php
    //Output footer
    output_footer();

    //Output the end
    output_tail();
?>