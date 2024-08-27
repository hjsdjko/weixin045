package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.BaobeiEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.BaobeiView;


/**
 * 报备
 *
 * @author 
 * @email 
 * @date 2024-03-12 20:27:06
 */
public interface BaobeiService extends IService<BaobeiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<BaobeiView> selectListView(Wrapper<BaobeiEntity> wrapper);
   	
   	BaobeiView selectView(@Param("ew") Wrapper<BaobeiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<BaobeiEntity> wrapper);
   	

}

