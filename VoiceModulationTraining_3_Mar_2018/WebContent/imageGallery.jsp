<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page import="java.io.File" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>Workshop picture gallery | Voice Modulation Training | voicemodulationtraining | BharatKumar Thanvi | Voice Modulation Training with BharatKumar Thanvi</title>

    <meta name="keywords" content="voice modulation , voice modulation workshop , Voice Modulation training, BharatKumar Thanvi , Voice Artists, voice over, voice images">
	<meta name="description" content="Voice Modulation training workshop participants">
    <meta name="author" content="BharatKumar Thanvi">
    <!-- 
	Medigo Template
	http://www.templatemo.com/preview/templatemo_460_medigo
    -->

	<!-- Google Fonts -->
	<link href="http://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700itali" rel="stylesheet">
	<!-- <link href="http://fonts.googleapis.com/css?family=Raleway:400,900,800,700,500,200,100,600" rel="stylesheet"> -->
	

	<!-- Stylesheets -->
	<link rel="stylesheet" href="bootstrap/bootstrap.css">
	<link rel="stylesheet" href="css/misc.css">
	<link rel="stylesheet" href="css/scheme.css">
	<link rel="stylesheet" href="css/Raleway_Font.css">
	
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

	<div class="first-widget parallax" id="portfolio">
		<div class="parallax-overlay">
			<div class="container pageTitle">
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<h2 class="page-title">Image Gallery</h2>
					</div> <!-- /.col-md-6 -->
					<div class="col-md-6 col-sm-6 text-right">
						<span class="page-location">Home / Gallery / Image Gallery</span>
					</div> <!-- /.col-md-6 -->
				</div> <!-- /.row -->
			</div> <!-- /.container -->
		</div> <!-- /.parallax-overlay -->
	</div> <!-- /.pageTitle -->


	<div class="container">
		<div class="row" style="padding-top: 50px; padding-bottom: 50px;">
			<div id="flickrembed"></div><div style="position:absolute; top:-70px; display:block; text-align:center; z-index:-1;"></div><script src='https://flickrembed.com/embed_v2.js.php?source=flickr&layout=responsive&input=www.flickr.com/photos/140292048@N07/albums/72157688305534050&sort=3&by=album&theme=tiles&scale=fit&limit=100&skin=default&autoplay=true'></script>
		</div> <!-- /.row -->
	</div> <!-- /.container -->

	<%@include file="footer.jsp" %>

	<!-- Scripts -->
	<script src="js/min/plugins.min.js"></script>
	<script src="js/min/medigo-custom.min.js"></script>
	

</body>
</html>
