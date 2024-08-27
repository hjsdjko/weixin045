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


import com.cl.dao.DiancanxinxiDao;
import com.cl.entity.DiancanxinxiEntity;
import com.cl.service.DiancanxinxiService;
import com.cl.entity.view.DiancanxinxiView;

@Service("diancanxinxiService")
public class DiancanxinxiServiceImpl extends ServiceImpl<DiancanxinxiDao, DiancanxinxiEntity> implements DiancanxinxiService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DiancanxinxiEntity> page = this.selectPage(
                new Query<DiancanxinxiEntity>(params).getPage(),
                new EntityWrapper<DiancanxinxiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DiancanxinxiEntity> wrapper) {
		  Page<DiancanxinxiView> page =new Query<DiancanxinxiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<DiancanxinxiView> selectListView(Wrapper<DiancanxinxiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DiancanxinxiView selectView(Wrapper<DiancanxinxiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

    @Override
    public List<Map<String, Object>> selectValue(Map<String, Object> params, Wrapper<DiancanxinxiEntity> wrapper) {
        return baseMapper.selectValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params, Wrapper<DiancanxinxiEntity> wrapper) {
        return baseMapper.selectTimeStatValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectGroup(Map<String, Object> params, Wrapper<DiancanxinxiEntity> wrapper) {
        return baseMapper.selectGroup(params, wrapper);
    }




}