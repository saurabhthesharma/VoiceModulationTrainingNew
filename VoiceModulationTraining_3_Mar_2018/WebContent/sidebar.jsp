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
<title>Voice Modulation Training</title>
</head>
<body>
<div class="col-md-4">
		<div class="sidebar">
		
					<div class="sidebar-widget">
						<h5 class="widget-title">More Posts</h5>
						
						<% 
						Connection con_sidebar = DbConnection.getConnection();
						Statement stmt_sidebar = con_sidebar.createStatement();
						stmt_sidebar = con_sidebar.createStatement();
						ResultSet result_sidebar = stmt_sidebar.executeQuery("SELECT * FROM Blogs ORDER BY BLOG_ID ASC LIMIT 5");
						
						while (result_sidebar.next()){
							
							String blogID = result_sidebar.getString("Blog_ID");
							String title = result_sidebar.getString("Title");
					        String author = result_sidebar.getString("Author");
					        String views = result_sidebar.getString("Views");						        
					        String tags = result_sidebar.getString("Tags");
					        String intro = result_sidebar.getString("Introduction");
					        String content = result_sidebar.getString("Content");
					        String coverPic = result_sidebar.getString("Cover_Pic");
					        String thumbPic = result_sidebar.getString("Thumbnail_Pic");
					        String publishedOn = result_sidebar.getString("Date_Published");
					        String lastUpdated = result_sidebar.getString("Last_Updated"); 						    
						    %>
						
						<div class="last-post clearfix">
							<div class="thumb pull-left">
								<a href="#"><img src="<%=thumbPic%>" alt="blog thumb"></a>
							</div>
							<div class="content">
								<span style="font-size: 14px;"><%=publishedOn%></span><br>
								<h4><a style="cursor: pointer;" onclick="readArticle_func2( '<%=blogID%>')"><%=title%></a></h4>
								<span style="font-size: 14px;">views : <%=views%></span><br>
							</div>
						</div> <!-- /.last-post -->
					 <%} %>	
					</div> <!-- /.sidebar-widget -->
					
					
					
				<!-- 	<div class="sidebar-widget">
						<h5 class="widget-title">Categories</h5>
						<div class="row categories">
							<div class="col-md-6">
								<ul>
									<li><a href="#">Standard</a></li>
									<li><a href="#">Audio</a></li>
									<li><a href="#">Video</a></li>
									<li><a href="#">Branding</a></li>
								</ul>
							</div>
							<div class="col-md-6">
								<ul>
									<li><a href="#">iOS Design</a></li>
									<li><a href="#">Business</a></li>
								</ul>
							</div>
						</div> /.row
					</div> /.sidebar-widget -->
					
					<div class="sidebar-widget">
						<h5 class="widget-title">Flickr Feed</h5>
						<ul id="flickr-feed" class="thumbs"></ul>
					</div> <!-- /.sidebar-widget -->
					<div class="sidebar-widget">
						<h5 class="widget-title">About Us</h5>
						<p class="light-text" style="text-align: justify;">Voice Modulation Training Institute aims to 'Enhance Your
		Voice!' and gives you that perfect training that helps you to -
		'Engage Your Audience!' and win their Hearts! through your Voice by
		using all the variables in your Voice at optimum level like your Voice
		Pitch, Tone, Voice Range, Voice Projection, Diction, Pronunciation,
		Speech Clarity, Intonation, Breathing Techniques etc. with our Voice
		Modulation Expert and a Multifaceted Personality Mr.Bharatkumar
		Thanvi, a Voice Over Artist, Dubbing Artist, Actor, Mimicry Artist,
		Anchor/Emcee and Trainer, who has successfully trained thousands of
		people which includes Bollywood Stars, Radio Jockeys, Anchors, Dubbing
		Artists, Voice Professionals, Singers, Politicians, Lawyers,
		Corporates, Sales and Marketing Professionals, Doctors, Professors
		etc. through our various professional training programs for Voice
		Modulation, Voice Culture, Voice Overs, Dubbing, Radio Jockey, Public
		Speaking, Acting, Singing, Confidence Building, Anchoring, Emcee,
		Mimicry, Stand up Comedy etc. with 100% placement assistance in cities
		like Mumbai, Pune, Bangalore, Delhi, Kolkata, Ahmadabad, Hyderabad,
		Chennai, Jaipur, Indore, Nashik, Chandigarh etc. So if you want to
		stand out and achieve your dreams! Then feel free to <a href="ContactUs">contact us! </a></p>
					</div> <!-- /.sidebar-widget -->
				</div> <!-- /.sidebar -->
</div> <!-- /.col-md-4 -->

   <form action="Article" method="post" id="articleForm_2" style="visibility: hidden;">
   <input type="text" value= "" name = "fullArticleName" id = "fullArticleName2">    
   </form>
   
	<script type="text/javascript">
	function readArticle_func2(ArticleName){
	//alert (ArticleName);
	$("#fullArticleName2").val(ArticleName);
	$("form#articleForm_2").submit();
}
</script>
	

</body>
</html>