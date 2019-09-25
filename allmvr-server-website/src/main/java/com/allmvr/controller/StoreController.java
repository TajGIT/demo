package com.allmvr.controller;

import java.time.LocalDate;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.allmvr.model.Store;
import com.allmvr.service.StoreService;
import com.allmvr.util.Integration;


@RestController
@RequestMapping("/store")
public class StoreController {

	protected final Log logger = LogFactory.getLog(getClass());

	private StoreService storeService;

	@Autowired
	public StoreController(StoreService storeService) {
		this.storeService = storeService;
	}
	

	// Store Registration 
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	private ResponseEntity<?> addStoreData(@RequestBody Store store) {
		try {
			store.setStatus("registered");
			storeService.save(store);			
			
			//Generate the Reference Number
			LocalDate today = LocalDate.now();
			String strtoday = today.toString();		
			String[] date = strtoday.split("[-]");
			String Ref_No ="AWR"+date[0]+date[1]+date[2]+"00"+store.getId();
			
			//Update The Reference Number in Store 			
			storeService.updateRefNo(store.getId(),Ref_No);
			
			// Send SMS through Registered MobileNumber			
			String msg = "Dear " + store.getShopOwnerName()+ ",\n Your request has been registerd sucessfully, Thank you for being part of Allmvr, we will contact you soon."+"\n For future assistence call us +918676253466.";
			Integration.sendMessage(store.getPhoneNumber(), msg);
			
		} catch (Exception e) {
			logger.error(e);
			return new ResponseEntity<>(String.format("Internal_Server_Problem"), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>("Registered_Successfully", HttpStatus.CREATED);
	}
	
}
