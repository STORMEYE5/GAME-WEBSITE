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
            <div id="title-name" class="box-div">NAME</div>
            <div id="title-score" class="box-div">SCORE</div>
        </div>
<?php
        for ($i = 0; $i < 10; $i++) {
            echo <<< END
            <div class="box-data">
                <div id="name$i" class="box-data-div">?</div>
                <div id="score$i" class="box-data-div">?</div>
            </div>
        
    END;
        }
?>
    </div>
    
    <h1 class="text" id="welcome-text">WELCOME</h1>

    <script type="text/javascript"src="../JavaScript/leaderboard.js"></script>

<?php
    //Output footer
    output_footer();

    //Output the end
    output_tail();
    ?>