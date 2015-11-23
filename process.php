<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Aishee Nguyen</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
      <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
      <link rel="stylesheet" href="/resources/demos/style.css">
      <link rel="stylesheet" type="text/css" media="screen" href="css/style.css">
      <link rel="shortcut icon" id="favicon" href="logos/health.png">
      <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
      <script src="//code.jquery.com/jquery-1.10.2.js"></script>
      <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
      <script src="js/home.js"></script>
   </head>
   <body style="background:white;">
      <div class="container-fluid" style="background:#efefef;">
         <?php 
            $to = "anh-tai@outlook.com"; // this is your Email address
            $name = $_GET["name"];
            $surname = $_GET["sname"];
            $from = $_GET["email"];
            $phone = $_GET["phone"];
            $comments = $_GET["comments"];
            $name_error=false;
            $sname_error=false;
            $phone_error=false;
            $email_error=false;
            
            $error = '';
            
            $reg_exp = '/^[a-zA-Z]+$/';
            $reg_exp_surname = '/^[a-zA-Z]+$/';
            $regexp_phone =  '^[0-9]{3}-[0-9]{7}$^';
            $reg_exp_email = "#[a-z0-9_\+-]+(\.[a-z0-9_\+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,4})$#";
            
            $count =0;
            
            
            
            if (! preg_match($reg_exp, $name))
            {
                   $count++;
                   $name_error=true;
            }
          
            if (! preg_match($reg_exp_surname, $surname))
            {
                   $count++;
                   $sname_error=true;
            }
            
            if (!preg_match($reg_exp_email, $from))
            {
                  $count++;
                  $email_error=true;
            }
    
            if (!is_numeric($phone))
            {
                 $count++;
                 $phone_error=true;
            }
         
             checkError($count,$to,$name,$surname,$phone,$from,$comments, $phone_error, $email_error, $name_error, $sname_error);
       
            ?>
         <?php 
            function checkError($count,$to,$name,$surname,$phone,$from,$comments, $phone_error, $email_error, $name_error, $sname_error)
              {
            
            $error_messages='';
            $loopResult='';
            
            if($name_error)
            {
               $error_messages = $error_messages . "" .$name." is not a valid name"."<br>";
            }
            if($sname_error)
            {
              $error_messages = $error_messages . "" .$surname." is not a valid surname"."<br>";
            }
            if($email_error)
            {
                 $error_messages = $error_messages . "" .$from." is not a valid email address"."<br>";
            }
            if($phone_error)
            {
                $error_messages = $error_messages . "" .$phone." is not a valid phone number"."<br>";
            }
            
            
            if($count <"1")
            {
            sendMail($to,$name,$surname,$phone,$from,$comments);
            }
        
            else
            {
        
                  $loopResult .= ' 
                    <div class="maineventfeed"> 
                          <div class="jumbotron" style="background:red;" > 
            <h1 style="color:white;">Error</h1> 
            <h3 style="color:white;">Your form has some errors Im afraid</h3>
            <h2 style="color:white;">'.$error_messages.'</h2><br>
            <button type="button" onclick="goHome();"  class="btn btn-info btn-circle btn-xl"><i class="glyphicon glyphicon-home"></i></button>
            <h4 style="color:white;">Try Again</h4>
            <br>
                          </div> 
                      </div> 
                    
                  ';  
                     echo $loopResult;
                
            }
            }
            function sendMail($to,$name,$surname,$phone,$from,$comments)
              {
            
            $subject = "Aishee Nguyen Contact";
              $subject2 = "Copy of your form submission";
            
            
                  $message = $name . " " .$surname. " has contacted you from your CV site \nHis phone number is " . $phone . "\n\n\nComments \n " . $_GET['comments'];
              $message2 = "You have successfully contacted me!. \n\nHere is a copy of your message " . $name . "\n\n" . $_GET['comments'];
            
              $headers = "From:" . $from;
              $headers2 = "From:" . $to;
              mail($to,$subject,$message,$headers);
              mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
            
              // You can also use header('Location: thank_you.php'); to redirect to another page.
            $loopResult='';
                  $loopResult .= ' 
                      <div class="maineventfeed"> 
                          <div class="jumbotron" style="background:green;" > 
                              <div class ="alert alert-success"  >Thank you! You have successfully registered for the seminar</div>
            
              <h1>Congratulations!!</h1> 
            <h3 style="color:white;">You have successfully Contacted Aishee</h3>
            <h3  style="color:white;">Thank You '. $name . ' </h3>
            <h3  style="color:white;">An email has been sent to '. $from . ' </h3>
           <button type="button" onclick="goHome();"  class="btn btn-info btn-circle btn-xl"><i class="glyphicon glyphicon-home"></i></button>
                            <br>
                          </div> 
                      </div> 
                    
                  ';  
                     echo $loopResult;
                          }
           
            ?>
         <br><br><br><br><br><br>
         <br><br><br><br><br><br>
      </div>
   </body>
</html>