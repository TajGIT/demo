package com.allmvr.util;

import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import org.springframework.stereotype.Component;


@Component
public class Integration {	
	
		// Send the SMS through PhoneNumber
		public static void sendMessage(String phoneNumber, String msg) {
		try {
			String mobiles = phoneNumber;
			String authkey = "282053AlllXijr7ry5d0c70c6";
			String route = "4";
			String sender = "ALLMVR";
			String message = msg;
			String country = "91";
			String requestUrl = "https://api.msg91.com/api/sendhttp.php?" + "mobiles="
					+ URLEncoder.encode(mobiles, "UTF-8") + "&authkey=" + URLEncoder.encode(authkey, "UTF-8")
					+ "&route=" + URLEncoder.encode(route, "UTF-8") + "&sender=" + URLEncoder.encode(sender, "UTF-8")
					+ "&message=" + URLEncoder.encode(message, "UTF-8") + "&country="
					+ URLEncoder.encode(country, "UTF-8");
			URL url = new URL(requestUrl);
			HttpURLConnection uc = (HttpURLConnection) url.openConnection();
			System.out.println(uc.getResponseMessage());
			uc.disconnect();
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
		}
	}
	
}
