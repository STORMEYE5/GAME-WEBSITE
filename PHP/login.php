<?php
    //Include the PHP functions to be used on the page
    include('common.php');

    //Output header
    output_header("LOGIN");

    //Output Navigation bar
    output_navbar_first();
    outputNavigation("LOGIN");
    output_navbar_second();
?>

	<!-- Contents of the page -->
    <div class="form-box">
        <div class="button-box">
            <div id="btn"></div>
            <button type="button" class="toggle_btn" onclick="login()">LOG IN</button>
            <button type="button" class="toggle_btn" onclick="register()">REGISTER</button>
        </div>
        <form id="login" class="input-group">
            <input id="login_userId" class="input-field" placeholder="User ID" required>
            <input id="login_password" type="text" class="input-field" placeholder="Password" required>
            <button id="submit_btn" type="submit" class="submit-btn">Log in</button>
        </form>
        <form id="register" class="input-group">
            <input id="register_userId" type="text" class="input-field" placeholder="User ID" autocomplete="off" required>
            <input id="email_address" type="email" class="input-field" placeholder="Email Address" autocomplete="off" required>
            <input id="register_password" type="password" class="input-field" placeholder="Password" autocomplete="off" required>
            <input id="phone_Id" type="text" class="input-field" placeholder="Phone Number" autocomplete="off" required>
            <input id="address_Id" type="text" class="input-field" placeholder="Address" autocomplete="off" required>
            <button id="submit_btn" type="submit" class="submit-btn">Register</button>
        </form>
    </div>

    <script src="../JavaScript/login.js"></script>

<?php
    //Output footer
    output_footer();

    //Output the end
    output_tail();
?>