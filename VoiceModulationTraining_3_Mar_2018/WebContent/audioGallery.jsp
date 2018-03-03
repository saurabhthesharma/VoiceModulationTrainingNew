<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page import="java.io.File" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>Audio Samples | Voice Modulation Training | voicemodulationtraining | BharatKumar Thanvi | Voice Modulation Training with BharatKumar Thanvi</title>

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

	<div class="first-widget parallax" id="blog">
		<div class="parallax-overlay">
			<div class="container pageTitle">
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<h2 class="page-title">Audio Gallery</h2>
					</div> <!-- /.col-md-6 -->
					<div class="col-md-6 col-sm-6 text-right">
						<span class="page-location">Home / Gallery / Audio Gallery</span>
					</div> <!-- /.col-md-6 -->
				</div> <!-- /.row -->
			</div> <!-- /.container -->
		</div> <!-- /.parallax-overlay -->
	</div> <!-- /.pageTitle -->

	<div class="container">	
		<div class="row">
            <div class= "audioPanel">
			<div class="col-md-8 blog-posts">
				<div class="row">
					<div class="col-md-12">
					
					<%					
					String path =  session.getAttribute("realContextPath").toString()+ "/properties/AudioSamples.txt";
					java.io.File file = new java.io.File( path ); // create a File object
					 
				    if ( file.exists() )                          // check that the file exists
				    {                                             // before trying to create a
				                                                  // BufferedReader
				        // Create a BufferedReader from the file
				        java.io.BufferedReader inFile = new java.io.BufferedReader(new java.io.FileReader( file ) );
				 
				        String line = inFile.readLine();
				        while ( line != null )
				        {
				       
				        %>
					
						<div class="post-blog">
							<%=line%>
						</div> <!-- /.post-blog -->
						
					 <%line = inFile.readLine();
			            }
				        inFile.close();
				    }		
					%> 
						
					</div> <!-- /.col-md-12 -->
	<!-- 				<div class="col-md-12" id= "">
						<ul class="pages">
							<li><a href="#" class="active">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">...</a></li>
							<li><a href="#">13</a></li>
						</ul>
					</div> /.col-md-12 -->
				</div> <!-- /.row -->
			</div> <!-- /.col-md-8 -->
			</div>

			
			<%@ include file="sidebar.jsp" %>

		</div> <!-- /.row -->
	</div> <!-- /.container -->	

	<%@include file="footer.jsp" %>

	<!-- Scripts -->
	<script src="js/min/plugins.min.js"></script>
	<script src="js/min/medigo-custom.min.js"></script>
	

</body>
</html>
