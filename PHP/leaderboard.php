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
            <tr>
                <td>ALI</td>
                <td>126</td>
            </tr>
            <tr>
                <td>TOM</td>
                <td>118</td>
            </tr>
            <tr>
                <td>MEGALODON</td>
                <td>112</td>
            </tr>
            <tr>
                <td>JET</td>
                <td>109</td>
            </tr>
            <tr>
                <td>TRACK</td>
                <td>97</td>
            </tr>
            <tr>
                <td>?</td>
                <td>?</td>
            </tr>
            <tr>
                <td>?</td>
                <td>?</td>
            </tr>
            <tr>
                <td>?</td>
                <td>?</td>
            </tr>
            <tr>
                <td>?</td>
                <td>?</td>
            </tr>
            <tr>
                <td>?</td>
                <td>?</td>
            </tr>
            </tbody>
        </table>
    </div>

<?php
    //Output footer
    output_footer();

    //Output the end
    output_tail();
?>