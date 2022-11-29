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
        <table class="table-content">
            <thead>
            <tr>
                <Th>NAME</Th>
                <Th>SCORE</Th>
            </tr>
            </thead>
            <tbody>
                <?php
                $Names = ["ALI","TOM","MEGALODON","JET","TRACK","?","?","?","?","?"];
                $Scores = ["126","118","112","109","97","?","?","?","?","?"];
                for ($i = 0; $i < count($Names); $i++) {
                    echo <<< END
                    <tr>
                        <td>$Names[$i]</td>
                        <td>$Scores[$i]</td>
                    </tr>
                    END;
                }
                ?>
            </tbody>
        </table>
    </div>
    
    <h1 class="text" id="welcome-text">WELCOME</h1>

    <script type="text/javascript">var jArray =<?php echo json_encode($Names); ?></script>
    <script type="text/javascript">var jArray2 =<?php echo json_encode($Scores); ?></script>
    <script type="text/javascript"src="../JavaScript/leaderboard.js"></script>

<?php
    //Output footer
    output_footer();

    //Output the end
    output_tail();
?>