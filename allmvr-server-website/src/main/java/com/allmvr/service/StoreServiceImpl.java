package com.allmvr.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.allmvr.model.Store;
import com.allmvr.repository.StoreRepository;


@Service
@Transactional
public class StoreServiceImpl implements StoreService {

	@Autowired
	private StoreRepository sellerInfoRepository;

	@Override
	public void save(Store store) {
		sellerInfoRepository.save(store);
	}

	@Override
	public void updateRefNo(Long id, String refNo) {
		sellerInfoRepository.updateRefNo(id,refNo);
	}
		
}
