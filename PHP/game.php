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
    <div class="game-box">
        <div class="title">GAME</div>
    </div>

<?php
    //Output footer
    output_footer();

    //Output the end
    output_tail();
?>
