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
    <!-- <link href="form-validation.css" rel="stylesheet"> -->
  </head>
  <?php
  $arr = getClasses();
  ?>
  <body class="bg-light">
    
<div class="container">
  <main>
  

    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-first">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">List of Endpoints</span>
          <span class="badge bg-primary rounded-pill"><?php echo count($arr); ?></span>
        </h4>
        <ul class="list-group mb-3">
            <?php foreach($arr as $key=>$value){?>
                <li id="<?php  echo substr( $value,11 ,-4); ?>" class="list-group-item d-flex justify-content-between lh-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
            <div>
              <h6 class="my-0"><?php echo substr( $value,11 ,-4); ?></h6>
              <!-- <small class="text-muted">Brief description</small> -->
            </div>
            <span class="text-muted"><i class="la-la right">></i></span>
          </li>     
      <?php } ?>
        
           
          <!-- <li class="list-group-item d-flex justify-content-between bg-light">
            <div class="text-success">
              <h6 class="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span class="text-success">−$5</span>
          </li> -->
          
        </ul>

        <form class="card p-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Promo code">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </form>
      </div>


      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
          <!-- <p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button>
</p> -->
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style="width: 300px;">
      This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
    </div>
  </div>
</div>
 
          </div>  
         
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
<script>
    $(document).ready(function(){
$('#collapseWidthExample').on('show.bs.collapse',function(e){
    console.log(e.target.id);
    $.ajax({
           url:'media/getclass.php',
       dataType:'json',
       data: {},
       type:"POST",
                success: function(res){   

                    console.log(res);
        //    var options = {};
        //    $.map(res,function(e){
        //    options[e.RR_CODE] = e.RR_NAME + '('+ e.RR_DESC + ')'; 
        //    });
        //    $('#'+ code).modal('hide');
        //    resolve(options);
 
  
           }
       });
       });
});
    </script>
  

</body></html>