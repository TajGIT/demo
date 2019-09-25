package com.allmvr.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.allmvr.model.ShopType;
import com.allmvr.service.ShopTypeService;

@RestController
@RequestMapping("/shoptype")
public class ShopTypeController {

	private ShopTypeService shopTypeService;

	@Autowired
	public ShopTypeController(ShopTypeService shopTypeService) {
		this.shopTypeService = shopTypeService;
	}

	
	// Get All ShopTypes 
	@RequestMapping(value = "/", method = RequestMethod.GET)
	private ResponseEntity<?> getAllShopTypes() {

		List<ShopType> list = shopTypeService.findAll();

		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	 
}
