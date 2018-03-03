package controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddArticle
 */
@WebServlet("/AddArticle")
public class AddArticle extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddArticle() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
		
		
		
		DateFormat dateFormat = new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");
		Date date = new Date();
		String publishedOn = dateFormat.format(date);
		String title = request.getParameter("title");
		String author = request.getParameter("author");
		String intro = request.getParameter("intro");
		String views = "0";
		String tags = request.getParameter("tags");
		String content = request.getParameter("content");
		String lastUpdated= publishedOn;
		String coverPic= request.getParameter("coverPic");
		String thumbPic= request.getParameter("thumbPic");
		String orderNo= "";
		
		System.out.println("photoUrl " + coverPic);
		System.out.println("photoThumbUrl " + thumbPic);
		
		Connection con = DbConnection.getConnection();
		
		Statement stmt = con.createStatement();
		stmt = con.createStatement();
		ResultSet result = stmt.executeQuery("select count(*) from Blogs");
		result.next();
		
		int blogCount = result.getInt(1);
	    ++blogCount;
		String blogID = "blog_"+blogCount;
		

		String addBlog =  "INSERT INTO BLOGS VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
		//String addBlog1 =  "INSERT INTO BLOGS VALUES ('"+blogID+"','"+title+"','"+author+"','"+intro+"','"+content+"','"+ tags +"','"+views+"','"+coverPic+"','"+thumbPic+"','"+orderNo+"','"+publishedOn+"','"+lastUpdated+"')";
		
		PreparedStatement pstmt = con.prepareStatement(addBlog);
		pstmt.setString(1, blogID);
		pstmt.setString(2, title);
		pstmt.setString(3, author);
		pstmt.setString(4, intro);
		pstmt.setString(5, content);
		pstmt.setString(6, tags);
		pstmt.setString(7, views);
		pstmt.setString(8, coverPic);
		pstmt.setString(9, thumbPic);
		pstmt.setString(10, orderNo);
		pstmt.setString(11, publishedOn);
		pstmt.setString(12, lastUpdated);
		
		pstmt.executeUpdate();
	
	System.out.println("done");
			con.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
