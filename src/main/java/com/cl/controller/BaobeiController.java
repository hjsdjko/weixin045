package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.BaobeiEntity;
import com.cl.entity.view.BaobeiView;

import com.cl.service.BaobeiService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 报备
 * 后端接口
 * @author 
 * @email 
 * @date 2024-03-12 20:27:06
 */
@RestController
@RequestMapping("/baobei")
public class BaobeiController {
    @Autowired
    private BaobeiService baobeiService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,BaobeiEntity baobei,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			baobei.setYonghuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<BaobeiEntity> ew = new EntityWrapper<BaobeiEntity>();

		PageUtils page = baobeiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, baobei), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,BaobeiEntity baobei, 
		HttpServletRequest request){
        EntityWrapper<BaobeiEntity> ew = new EntityWrapper<BaobeiEntity>();

		PageUtils page = baobeiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, baobei), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( BaobeiEntity baobei){
       	EntityWrapper<BaobeiEntity> ew = new EntityWrapper<BaobeiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( baobei, "baobei")); 
        return R.ok().put("data", baobeiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(BaobeiEntity baobei){
        EntityWrapper< BaobeiEntity> ew = new EntityWrapper< BaobeiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( baobei, "baobei")); 
		BaobeiView baobeiView =  baobeiService.selectView(ew);
		return R.ok("查询报备成功").put("data", baobeiView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        BaobeiEntity baobei = baobeiService.selectById(id);
		baobei = baobeiService.selectView(new EntityWrapper<BaobeiEntity>().eq("id", id));
        return R.ok().put("data", baobei);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        BaobeiEntity baobei = baobeiService.selectById(id);
		baobei = baobeiService.selectView(new EntityWrapper<BaobeiEntity>().eq("id", id));
        return R.ok().put("data", baobei);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody BaobeiEntity baobei, HttpServletRequest request){
    	baobei.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(baobei);
        baobeiService.insert(baobei);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody BaobeiEntity baobei, HttpServletRequest request){
    	baobei.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(baobei);
        baobeiService.insert(baobei);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody BaobeiEntity baobei, HttpServletRequest request){
        //ValidatorUtils.validateEntity(baobei);
        baobeiService.updateById(baobei);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        baobeiService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
