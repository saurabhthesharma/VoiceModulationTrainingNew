package controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Blog;

/**
 * Servlet implementation class UpdateArticle
 */
@WebServlet("/UpdateArticle")
public class UpdateArticle extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateArticle() {
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
		
		System.out.println("inside Update Article");
		
	    String getListFlag = request.getParameter("getList");
	    String getPopulated = request.getParameter("getPopulated");
	    String blogIDSelected = request.getParameter("blogIDSelected");
	    
	    
	    
	    Connection con = null;
	    if(getListFlag.equals("true")){
	 
	    	con = DbConnection.getConnection();
	    	ArrayList<Blog> blogList = new ArrayList<Blog>();
			
			Statement stmt;
		try {
			System.out.println("Begin");
			stmt = con.createStatement();
			ResultSet result = stmt.executeQuery("select * from Blogs order by Blog_ID");
			System.out.println("About to start");
			while (result.next()){
				Blog blog = new Blog();

				blog.setBlogID(result.getString("Blog_ID"));
				blog.setTitle(result.getString("Title"));
				blog.setAuthor(result.getString("Author"));
				blog.setViews(result.getString("Views"));
				blog.setTags(result.getString("Tags"));
				blog.setIntro(result.getString("Introduction"));
				blog.setContent(result.getString("Content"));
				blog.setCoverPic(result.getString("Cover_Pic"));
			    blog.setThumbPic(result.getString("Thumbnail_Pic"));
			    blog.setPublishedOn(result.getString("Date_Published"));
			    blog.setLastUpdated(result.getString("Last_Updated"));

			    blogList.add(blog);
			  }
			
			  System.out.println("data Collected -  Size : " + blogList.size() );
			  
			  request.getSession().setAttribute("blogList", blogList);
		
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}finally{
				try {
					con.close();
				} catch (SQLException e) {
					
					e.printStackTrace();
				}
			}
			
	    }
	    
	    if(getListFlag.equals("false") &&blogIDSelected !=null && getPopulated.equals("true")){
	    	
	    	 
	    	 System.out.println("blogIDSelected >> " + blogIDSelected );
	    	 request.getSession().setAttribute("blogIDSelected", blogIDSelected);
	    	 
	    }
	}

}
