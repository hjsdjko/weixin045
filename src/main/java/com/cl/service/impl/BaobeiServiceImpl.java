package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.BaobeiDao;
import com.cl.entity.BaobeiEntity;
import com.cl.service.BaobeiService;
import com.cl.entity.view.BaobeiView;

@Service("baobeiService")
public class BaobeiServiceImpl extends ServiceImpl<BaobeiDao, BaobeiEntity> implements BaobeiService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<BaobeiEntity> page = this.selectPage(
                new Query<BaobeiEntity>(params).getPage(),
                new EntityWrapper<BaobeiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<BaobeiEntity> wrapper) {
		  Page<BaobeiView> page =new Query<BaobeiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<BaobeiView> selectListView(Wrapper<BaobeiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public BaobeiView selectView(Wrapper<BaobeiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
