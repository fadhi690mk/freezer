<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $database = "ducth";
    $con = mysqli_connect($host, $user, $pass, $database);

if(isset($_POST['submit'])){

    $cooling=$_POST["cooling"];
    $m_width=$_POST["m-width"];
    $m_depth=$_POST["m-depth"];
    $m_height=$_POST["m-height"];
    $thickness=$_POST["thickness"];
    $floor=$_POST["floor"];
    $doortype=$_POST["doortype"];
    $doorlocation=$_POST["doorlocation"];
    $dooropeningwidth=$_POST["dooropeningwidth"];
    $coolingunit=$_POST["coolingunit"];
    $installation=$_POST["installation"];
    $stripcurtain=$_POST["stripcurtain"];
    $floorbeams=$_POST["floorbeams"];
    $racking=$_POST["racking"];
    $notestocompress=$_POST["notes"];
    $notes = gzencode($notestocompress);
    $companyname=$_POST["companyname"];
    $contactperson=$_POST["contactperson"];
    $telephonenumber=$_POST["telephonenumber"];
    $emailaddress=$_POST["emailaddress"];
    

    $sql = "INSERT INTO `formdata`( `cooling`,`m_width`,`m_depth`,`m_height`,`thickness`,`floor`,`doortype`,`doorlocation`,`dooropeningwidth`,`coolingunit`,`installation`,`stripcurtain`,`floorbeams`,`racking`,`notes`,`companyname`,`contactperson`,`telephonenumber`,`emailaddress`) VALUES ( \"$cooling\",
    \"$m_width\",
    \"$m_depth\",
    \"$m_height\",
    \"$thickness\",
    \"$floor\",
    \"$doortype\",
    \"$doorlocation\",
    \"$dooropeningwidth\",
    \"$coolingunit\",
    \"$installation\",
    \"$stripcurtain\",
    \"$floorbeams\",
    \"$racking\",
    \"$notes\",
    \"$companyname\",
    \"$contactperson\",
    \"$telephonenumber\",
    \"$emailaddress\")";
        
    $sign=mysqli_query($con, $sql);
    header("Location: index.html");
   
    
}




