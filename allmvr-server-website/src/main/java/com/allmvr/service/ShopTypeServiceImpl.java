package com.allmvr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.allmvr.model.ShopType;
import com.allmvr.repository.ShopTypeRepository;

@Service
@Repository
public class ShopTypeServiceImpl implements ShopTypeService {
	
	@Autowired
	private ShopTypeRepository shopTypeRepository;
	
	@Override
	public List<ShopType> findAll() {		
		return shopTypeRepository.findAll();
	}
		
}
