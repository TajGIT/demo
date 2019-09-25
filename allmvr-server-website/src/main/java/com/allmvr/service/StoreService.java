package com.allmvr.service;

import com.allmvr.model.Store;


public interface StoreService {

	void save(Store store);

	void updateRefNo(Long id, String refNo);
	
}
