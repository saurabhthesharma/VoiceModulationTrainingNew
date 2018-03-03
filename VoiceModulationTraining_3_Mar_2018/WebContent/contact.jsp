<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>Contact Us | Voice Modulation Training | voicemodulationtraining | BharatKumar Thanvi</title>

    <meta name="keywords" content="">
	<meta name="description" content="">
    <meta name="author" content="templatemo">
    <!-- 
	Medigo Template
	http://www.templatemo.com/preview/templatemo_460_medigo
    -->

	<!-- Google Fonts -->
	<link href="http://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700itali" rel="stylesheet">
	<link href="http://fonts.googleapis.com/css?family=Raleway:400,900,800,700,500,200,100,600" rel="stylesheet">

	<!-- Stylesheets -->
	<link rel="stylesheet" href="bootstrap/bootstrap.css">
	<link rel="stylesheet" href="css/misc.css">
	<link rel="stylesheet" href="css/scheme.css">
	
	<!-- JavaScripts -->
	<script src="js/jquery-1.10.2.min.js"></script>
	<script src="js/jquery-migrate-1.2.1.min.js"></script>

	<link rel="shortcut icon" href="images/LOGO.png" type="image/x-icon" />
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114401074-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', 'UA-114401074-1');
	</script>
		
	

</head>
<body>


	<%@include file="header.jsp" %>
	
	<div class="first-widget parallax" id="contact">
		<div class="parallax-overlay">
			<div class="container pageTitle">
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<h2 class="page-title">Contact</h2>
					</div> <!-- /.col-md-6 -->
					<div class="col-md-6 col-sm-6 text-right">
						<span class="page-location">Home / Contact</span>
					</div> <!-- /.col-md-6 -->
				</div> <!-- /.row -->
			</div> <!-- /.container -->
		</div> <!-- /.parallax-overlay -->
	</div> <!-- /.pageTitle -->

	<div class="container">	
		<div class="row">

			<div class="col-md-8 blog-posts">
				<div class="row">
					<div class="col-md-12">
						<div class="contact-wrapper">
							<h3>Get In Touch With Us</h3>
							<p>Feel free to call us or message us to know more about our courses in Voice Modulation, Public Speaking, Radio jockey, Dubbing, Voice Overs, Anchoring/Emcee, Acting, Singing, Mimicry etc in your city</p>
							<div class="contact-map">
			            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15068.926370131318!2d72.855138!3d19.228736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb34a4e88ccab46a!2sDhanraj+Appliances+%26+Novelties!5e0!3m2!1sen!2sin!4v1519979914711" width="700" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>
			                </div>
						</div> <!-- /.contact-wrapper -->
					</div> <!-- /.col-md-12 -->
				</div> <!-- /.row -->
				<div class="row">
                    <div class="col-md-12">
                        <div class="contact-form">
                            <h3>Send a Direct Message</h3>
	                        <div class="widget-inner">
                            <form action="#" method="post" id="contact-form">
                                <div class="row">
                                    <div class="col-md-4">
                                        <p>
                                            <label for="name">Your Name:</label>
                                            <input type="text" name="name" id="name">
                                        </p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>
                                            <label for="email">Email Address:</label>
                                             <input type="text" name="email" id="email">
                                        </p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>
                                            <label for="subject">Subject:</label>
                                             <input type="text" name="subject" id="subject">
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>
                                            <label for="message">Your message:</label>
                                            <textarea name="message" id="message"></textarea>
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <button class="mainBtn" id="submit">Send Message</button>
                                    </div>
                                </div>
                                <div class="row">
                                	<div class="col-md-12">
                                		<div id="result"></div>
                                	</div> <!-- /.col-md-12 -->
                                </div> <!-- /.row -->
                            </form>
                          </div> <!-- /.widget-inner -->
                        </div> <!-- /.contact-form -->
                    </div> <!-- /.col-md-12 -->
                </div> <!-- /.row -->
			</div> <!-- /.col-md-8 -->

			<%@ include file="sidebar.jsp" %>

		</div> <!-- /.row -->
	</div> <!-- /.container -->	

    <%@include file="footer.jsp" %>

	<!-- Scripts -->
	<script src="js/min/plugins.min.js"></script>
	<script src="js/min/medigo-custom.min.js"></script>
	


</body>
</html>