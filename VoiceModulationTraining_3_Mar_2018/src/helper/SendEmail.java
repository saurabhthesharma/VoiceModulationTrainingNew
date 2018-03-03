package helper;

// [START simple_includes]

import java.io.UnsupportedEncodingException;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

// [END simple_includes]
// [START multipart_includes]
// [END multipart_includes]


public class SendEmail {

	
	public static void main(String[] args) {
		sendSimpleMail();	
	}


  private static void sendSimpleMail() {
	  
	  System.out.println("Start");
    // [START simple_example]
    Properties props = new Properties();
    Session session = Session.getDefaultInstance(props, null);

    try {
      Message msg = new MimeMessage(session);
      msg.setFrom(new InternetAddress("sawrabhsharma19991@gmail.com", "Example.com Admin"));
      msg.addRecipient(Message.RecipientType.TO,
                       new InternetAddress("sawrabhsharma19991@gmail.com", "Mr. User"));
      msg.setSubject("Your Example.com account has been activated");
      msg.setText("This is a test");
      System.out.println("before sending");
      Transport.send(msg);
      System.out.println("Done!");
    } catch (AddressException e) {
    	e.printStackTrace();
      // ...
    } catch (MessagingException e) {
    	e.printStackTrace();
      // ...
    } catch (UnsupportedEncodingException e) {
    	e.printStackTrace();
      // ...
    }
    // [END simple_example]
  }

  /*private void sendMultipartMail() {
    Properties props = new Properties();
    Session session = Session.getDefaultInstance(props, null);

    String msgBody = "...";

    try {
      Message msg = new MimeMessage(session);
      msg.setFrom(new InternetAddress("admin@example.com", "Example.com Admin"));
      msg.addRecipient(Message.RecipientType.TO,
                       new InternetAddress("user@example.com", "Mr. User"));
      msg.setSubject("Your Example.com account has been activated");
      msg.setText(msgBody);

      // [START multipart_example]
      String htmlBody = "";          // ...
      byte[] attachmentData = null;  // ...
      Multipart mp = new MimeMultipart();

      MimeBodyPart htmlPart = new MimeBodyPart();
      htmlPart.setContent(htmlBody, "text/html");
      mp.addBodyPart(htmlPart);

      MimeBodyPart attachment = new MimeBodyPart();
      InputStream attachmentDataStream = new ByteArrayInputStream(attachmentData);
      attachment.setFileName("manual.pdf");
      attachment.setContent(attachmentDataStream, "application/pdf");
      mp.addBodyPart(attachment);

      msg.setContent(mp);
      // [END multipart_example]

      Transport.send(msg);

    } catch (AddressException e) {
      // ...
    } catch (MessagingException e) {
      // ...
    } catch (UnsupportedEncodingException e) {
      // ...
    }
  }*/
}