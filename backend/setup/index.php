<html lang="en"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.101.0">
    <title>Checkout example · Bootstrap v5.2</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/checkout/">

    

    <?php include 'function.php';?>

<link href="media/bootstrap.css" rel="stylesheet">

    <!-- Favicons -->
<link rel="apple-touch-icon" href="/docs/5.2/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
<link rel="icon" href="/docs/5.2/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/docs/5.2/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="manifest" href="/docs/5.2/assets/img/favicons/manifest.json">
<link rel="mask-icon" href="/docs/5.2/assets/img/favicons/safari-pinned-tab.svg" color="#712cf9">
<link rel="icon" href="/docs/5.2/assets/img/favicons/favicon.ico">
<meta name="theme-color" content="#712cf9">


    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }
    </style>

    
    <!-- Custom styles for this template -->
    <link href="form-validation.css" rel="stylesheet">
  </head>
  <body class="bg-light">
   
<div class="container">
  <main>
    <!-- <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
      <h2>Checkout form</h2>
      <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
    </div> -->

    <div class="row g-5">
     
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Project Setup</h4>
        <form class="needs-validation" novalidate="" enctype="multipart/form-data" method="POST">
        <input type="hidden" id="action" name="action" value="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Project name</label> 
              <input type="text" class="form-control" id="projectname" name="projectname" placeholder="" value="<?php echo $arr['apidoc']['name'];?>" required="">
              <div class="invalid-feedback">
                Valid Project name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Project Version</label>
              <input type="text" class="form-control" name="version" id="version" placeholder="" value="<?php echo $arr['apidoc']['version'];?>" required="">
              <div class="invalid-feedback">
                Valid Project version is required.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Description</label>
              <div class="input-group has-validation"> 
                <input type="text" class="form-control" id="description" value="<?php echo $arr['apidoc']['description'];?>"  name="description" placeholder="description" required="">
              <div class="invalid-feedback">
                  Your Project Description is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="title" class="form-label">Title <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="title" name="title" value="<?php echo $arr['apidoc']['title'];?>" placeholder="Project title">
              <div class="invalid-feedback">
                Please enter a Project title.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Base Url</label>
              <input type="text" class="form-control" id="url" name="url" value="<?php echo $arr['apidoc']['url'];?>" placeholder="Base Url" required="">
              <div class="invalid-feedback">
                Please enter your Base URL.
              </div>
            </div>

            <div class="col-12">
              <label for="headertitle" class="form-label">Header Title  </label>
              <input type="text" class="form-control" id="headertitle" value="<?php echo $arr['apidoc']['header']['title'];?>"  name="headertitle" placeholder="Header Title">
              <div class="invalid-feedback">
                Please enter Header title.
              </div>
            </div>

            <div class="col-md-5">
              <label for="headerfile" class="form-label">Header File</label>
              <input class="form-control" id="headerfile" name="headerfile" value="<?php echo $arr['apidoc']['header']['filename'];?>" required=""> 
              <div class="invalid-feedback">
                Please Enter Header file.
              </div>
            </div>

            <div class="col-12">
              <label for="footertitle" class="form-label">Footer Title  </label>
              <input type="text" class="form-control" id="footertitle" value="<?php echo $arr['apidoc']['footer']['title'];?>" name="footertitle" placeholder="Footer Title">
              <div class="invalid-feedback">
                Please enter Footer title.
              </div>
            </div>

            <div class="col-md-5">
              <label for="footerfile" class="form-label">Footer File</label>
              <input class="form-control" id="footerfile" value="<?php echo $arr['apidoc']['footer']['filename'];?>" name="footerfile" required=""> 
              <div class="invalid-feedback">
                Please Enter Footer file.
              </div>
            </div>
          </div>
  

          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" formaction="classes.php" onclick="document.getElementById('action').value='createproject';form.submit();">Create Project</button>
        </form>
      </div>
    </div>
  </main>

  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">© 2017–2022 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</div>

    <script src="media/jquery.js"  ></script>
    <script src="media/bootstrap.js"  ></script>

      <!-- <script src="form-validation.js"></script> -->
  

</body></html>