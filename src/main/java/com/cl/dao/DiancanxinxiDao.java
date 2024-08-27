package com.cl.dao;

import com.cl.entity.DiancanxinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.DiancanxinxiView;


/**
 * 点餐信息
 * 
 * @author 
 * @email 
 * @date 2024-03-12 20:27:06
 */
public interface DiancanxinxiDao extends BaseMapper<DiancanxinxiEntity> {
	
	List<DiancanxinxiView> selectListView(@Param("ew") Wrapper<DiancanxinxiEntity> wrapper);

	List<DiancanxinxiView> selectListView(Pagination page,@Param("ew") Wrapper<DiancanxinxiEntity> wrapper);
	
	DiancanxinxiView selectView(@Param("ew") Wrapper<DiancanxinxiEntity> wrapper);
	

    List<Map<String, Object>> selectValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<DiancanxinxiEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<DiancanxinxiEntity> wrapper);

    List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<DiancanxinxiEntity> wrapper);



}
