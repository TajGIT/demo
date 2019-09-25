package com.allmvr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.allmvr.model.ShopType;

@Repository
public interface ShopTypeRepository extends JpaRepository<ShopType, Long> {

}
