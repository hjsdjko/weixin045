package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.DiancanxinxiEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.DiancanxinxiView;


/**
 * 点餐信息
 *
 * @author 
 * @email 
 * @date 2024-03-12 20:27:06
 */
public interface DiancanxinxiService extends IService<DiancanxinxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DiancanxinxiView> selectListView(Wrapper<DiancanxinxiEntity> wrapper);
   	
   	DiancanxinxiView selectView(@Param("ew") Wrapper<DiancanxinxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DiancanxinxiEntity> wrapper);
   	

    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<DiancanxinxiEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<DiancanxinxiEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<DiancanxinxiEntity> wrapper);



}

