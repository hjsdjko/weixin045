package com.cl.dao;

import com.cl.entity.BaobeiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.BaobeiView;


/**
 * 报备
 * 
 * @author 
 * @email 
 * @date 2024-03-12 20:27:06
 */
public interface BaobeiDao extends BaseMapper<BaobeiEntity> {
	
	List<BaobeiView> selectListView(@Param("ew") Wrapper<BaobeiEntity> wrapper);

	List<BaobeiView> selectListView(Pagination page,@Param("ew") Wrapper<BaobeiEntity> wrapper);
	
	BaobeiView selectView(@Param("ew") Wrapper<BaobeiEntity> wrapper);
	

}
