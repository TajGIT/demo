package com.allmvr.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.allmvr.model.Store;

@Repository
public interface StoreRepository extends JpaRepository<Store, Long>{
	
	@Modifying	
	@Query(value="Update Store s SET s.refNo=?2 WHERE s.id=?1")
	void updateRefNo(Long id, String refNo);	
	
}
