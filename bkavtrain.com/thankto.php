<html>

<head>
    <title>Welcome to....</title>
    <link href="content/css/styles.css" rel="stylesheet">
</head>

<body>
<div class="bcontainer">
    <div class="row">
        <div class="error-template">
            <h1>
                Welcome to User: <?php echo $_POST["username"]; ?></h1>
            <div class="error-details">
                Successful register user, welcome to page!
            </div>
            <div class="error-actions">
                <a href="http://bkavtrain.com" class="btn btn-primary btn-lg"><span>Take Me Home</span></a>
                <a href="http://github.com/aishee/" class="btn btn-default btn-lg"><span>Contact Support</span></a>
            </div>
        </div>
    </div>
</div>
</body>

</html>