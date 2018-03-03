package controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class DbConnection
 */
@WebServlet("/DbConnection")
public class DbConnection extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DbConnection() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("***********start***************");
		Connection con = getConnection();
		try {

			System.out.println("inside");
			
			
			
			Statement stmt = con.createStatement();
						
			 String sql = "CREATE TABLE IF NOT EXISTS Blogs(Blog_ID varchar(25),Title varchar(100),Author varchar(50),Introduction varchar(1000),Content varchar(5000), Tags varchar(300),Views varchar(20),Cover_Pic varchar(500) , Thumbnail_Pic varchar(500) , OrderNo varchar(20), Date_Published varchar(20), Last_Updated varchar(20));";
	         stmt.executeUpdate(sql);
	         System.out.println("Blogs Table created sucessfully");
	         
	         sql = "CREATE TABLE IF NOT EXISTS User_Query(Query_ID varchar(25),User_Name varchar(100),User_Phone_Number varchar(20) ,User_Email_Address varchar(100),Subject varchar(100),City varchar(50),Message varchar(1000), Date_Of_Submission DATE, Time_of_Submission DATE)";
	         stmt.executeUpdate(sql);
	         System.out.println("User_Query Table created sucessfully");
	         
			
			//Create schema if not exists 
			//Creating project tables if not exist - 1) Blog table 2) ContactUs table
			con.close();
			
			System.out.println("***********End************");
		} catch (Exception e) {
			System.out.println(e);
		}finally{
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}
	
	public static Connection getConnection(){
		try{
		Class.forName("com.mysql.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/voice_modulation_training","root", "Welcome1!");
		/*Connection con = DriverManager.getConnection("jdbc:mysql://us-cdbr-iron-east-05.cleardb.net:3306/heroku_f9fe4526a0d5721","b0430972ee7170", "37e68117");*/
		return con;
		}catch (Exception e) {
			System.out.println(e);
		}
		return null;
		
	}

}
