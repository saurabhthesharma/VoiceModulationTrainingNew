<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <%@ page import="java.io.File" %>
 <%@ page import="java.text.SimpleDateFormat" %>
 <%@ page import="java.util.Date" %>
 <%@ page import="java.util.Arrays" %>
 <%@ page import="org.apache.commons.io.comparator.LastModifiedFileComparator" %>
 
 <%@ page import="java.sql.Connection" %>
 <%@ page import="java.sql.DriverManager" %>
 <%@ page import="java.sql.ResultSet" %>
 <%@ page import="java.sql.SQLException" %>
 <%@ page import="java.sql.Statement" %>
 <%@ page import="controller.DbConnection" %>



<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>Articles | Voice Modulation Training | voicemodulationtraining | BharatKumar Thanvi | Voice Modulation Training with BharatKumar Thanvi</title>

    <meta name="keywords" content="">
	<meta name="description" content="Articles on voice mdoluation tips">
    <meta name="author" content="BharatKumar Thanvi">
    
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
						<h2 class="page-title">Articles</h2>
					</div> <!-- /.col-md-6 -->
					<div class="col-md-6 col-sm-6 text-right">
						<span class="page-location">Home / Articles</span>
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
						
							<% 
							
							Connection con = DbConnection.getConnection();
							
							Statement stmt = con.createStatement();
							stmt = con.createStatement();
							ResultSet result = stmt.executeQuery("SELECT * FROM Blogs ORDER BY Blog_ID DESC ");
							System.out.println("Query Executed");
							
							while (result.next()){
							
							String blogID = result.getString("Blog_ID");
							String title = result.getString("Title");
					        String author = result.getString("Author");
					        String views = result.getString("Views");						        
					        String tags = result.getString("Tags");
					        String intro = result.getString("Introduction");
					        String content = result.getString("Content");
					        String coverPic = result.getString("Cover_Pic");
					        String thumbPic = result.getString("Thumbnail_Pic");
					        String publishedOn = result.getString("Date_Published");
					        String lastUpdated = result.getString("Last_Updated");
					        
					        System.out.println("data recieved : " + blogID );
							
						 
						        %>
						     <div class="post-blog">
						    <div class="blog-content">
							<h3><a href="blog-single.jsp"><%=title%></a></h3>  
								<span class="meta-date">Published on : <%=publishedOn %></span>
								<span class="meta-author">Author : <%=author%></span>
								
								<div class="blog-image">
									<a href="<%=coverPic%>">
										<img class="coverPic" src="<%=coverPic%>" alt="">
									</a>
								</div> <!-- /.blog-image -->
						
								<p> <%=intro%>
					   <a style="cursor: pointer;" onclick="readArticle( '<%=blogID%>')">Continue Reading...</a></p>
					</div> <!-- /.blog-content -->
			       </div> <!-- /.post-blog -->
			       <%}%>
			       </div> <!-- /.col-md-12 --
					<div class="col-md-12">
						<ul class="pages">
							<li><a href="#" class="active">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">...</a></li>
							<li><a href="#">13</a></li>
						</ul>
					 </div> <!-- /.col-md-12 -->
					</div> <!-- /.rows -->
				</div> <!-- /.col-md-8 -->
					
		<%@ include file="sidebar.jsp" %>
		
				
	</div> <!-- /.row -->
	</div> <!-- /.container -->	
   
   <form action="Article" method="post" id="articleForm" style="display: none">
   <input type="text" value= "" name = "fullArticleName" id = "fullArticleName">    
   </form>
	
	

	<%@include file="footer.jsp" %>
	

	<!-- Scripts -->
	<script src="js/min/plugins.min.js"></script>
	<script src="js/min/medigo-custom.min.js"></script>
<script type="text/javascript">
function readArticle(ArticleName){
	//alert (ArticleName);
	$("#fullArticleName").val(ArticleName);
	$("form#articleForm").submit();
		
}

</script>
</body>
</html>