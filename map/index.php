<!DOCTYPE HTML>

<html>
    <head>
        <!-- bootstrap and jquery plugs -- these 3 must be first -->
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <script src="js/notouch/jquery-3.2.1.min.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>

        <link rel="stylesheet" type="text/css" href="./css/landing.css" />
        <script src="./js/landing.js" type="text/javascript"></script>
    </head>

    <body>

        <div id="lmy_overlay" class="lfullscreen_overlay">

            <nav class="navbar navbar-inverse" id="lmyNav">
                <div class="wrapper">
                    <input type="image" id="close_btn" class="closeBtn" src="./res/button_img/cu-btn2.jpg" onClick="closeOverlay()"/>
                </div>
            </nav>

            <div class="container form-container">
                <form id="registryform" class="my_form">

                    <div class="row r1">
                        <label>Full Name: </label>
                    </div>

                    <div class="row r1">
                        <input name="name" type="text" id="input-name"/>
                    </div>

                    <div class="row r1">
                        <label id="label-email">Email: </label>
                    </div>

                    <div class="row r1">
                        <input name="email" type="text" id="input-email" />
                    </div>

                    <div class="row r1">
                        <label id="label-number">Contact Number: </label>
                    </div>

                    <div class="row r1">
                        <input name="number" type="number" id="input-number"/>
                    </div>

                    <div class="row r1">
                        <a id="submit-btn" class="btn btn-clear btn-md submit-btn">Submit</a>
                    </div>

                </form>
            </div>

        </div>

        <div class="container slide-container">
            <div id="myCarousel" class="carousel slide">

                <!--
<ol class="carousel-indicators">
<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
<li data-target="#myCarousel" data-slide-to="1"></li>
<li data-target="#myCarousel" data-slide-to="2"></li>
<li data-target="#myCarousel" data-slide-to="3"></li>
<li data-target="#myCarousel" data-slide-to="4"></li>
<li data-target="#myCarousel" data-slide-to="5"></li>
<li data-target="#myCarousel" data-slide-to="6"></li>
<li data-target="#myCarousel" data-slide-to="7"></li>
</ol>
-->

                <div class="carousel-inner">
                    <div class="item active">
                        <img class="img-responsive" src="res/gallery_img/1.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/2.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/3.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/4.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/5.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/6.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/7.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/8.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/9.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/10.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/11.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/12.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/13.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/14.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/15.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/16.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="res/gallery_img/17.jpg"/>
                        <div class="img-text-wrapper">
                            <h3> some good words </h3>
                        </div>
                    </div>
                </div>

            </div>

            <div class="container-fluid btn-overlay overlay-A">
                <div class="row r2">
                    <a class="btn btn-clear btn-sm left-btn " href="pdf/documentation.pdf">PDF</a>
                    <a class="btn btn-clear btn-sm right-btn" onClick="openOverlay()">Sign Up!</a>
                </div>
            </div>

            <div class="container-fluid btn-overlay overlay-B">
                <div class="row">
                    <a class="icon-btn" href="nyc/nyc.html"> 
                        <img id="right-img" src="res/button_img/nyc.jpg" />
                        <p>NYC Map</p>
                    </a>

                    <a class="icon-btn" href="US.html"> 
                        <img id="left-img" src="res/button_img/us.jpg" />
                        <p>US Map</p>
                    </a>

                </div>
            </div>

        </div>

    </body>
</html>