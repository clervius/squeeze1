'use strict';

var _ = require('lodash');
var taxpayer = require('./taxpayer.model');
var path = require('path');
var express = require('express');


exports.createTaxpayer = function(req, res){
	console.log(req.body);
	var dependents = []
	var incomes = []
	// incomes
	var inc1 = {
		inType: req.body.inType1,
		income: req.body.income1,
		fdTax: req.body.fdTax1,
		stTax: req.body.stTax1,
		expenses: req.body.expenses1,
		oDiv:req.body.oDiv1,
		qDiv:req.body.qDiv1,
		combatPay: req.body.combatPay1,
		code: req.body.code1
	}
	var inc2 = {
		inType: req.body.inType2,
		income: req.body.income2,
		fdTax: req.body.fdTax2,
		stTax: req.body.stTax2,
		expenses: req.body.expenses2,
		oDiv:req.body.oDiv2,
		qDiv:req.body.qDiv1,
		combatPay: req.body.combatPay2,
		code: req.body.code2
	}
	var inc3 = {
		inType: req.body.inType3,
		income: req.body.income3,
		fdTax: req.body.fdTax3,
		stTax: req.body.stTax3,
		expenses: req.body.expenses3,
		oDiv:req.body.oDiv3,
		qDiv:req.body.qDiv3,
		combatPay: req.body.combatPay3,
		code: req.body.code3
	}
	var inc4 = {
		inType: req.body.inType4,
		income: req.body.income4,
		fdTax: req.body.fdTax4,
		stTax: req.body.stTax4,
		expenses: req.body.expenses4,
		oDiv:req.body.oDiv4,
		qDiv:req.body.qDiv4,
		combatPay: req.body.combatPay4,
		code: req.body.code4
	}
	var inc5 = {
		inType: req.body.inType5,
		income: req.body.income5,
		fdTax: req.body.fdTax5,
		stTax: req.body.stTax5,
		expenses: req.body.expenses5,
		oDiv:req.body.oDiv5,
		qDiv:req.body.qDiv5,
		combatPay: req.body.combatPay5,
		code: req.body.code5
	}
	var inc6 = {
		inType: req.body.inType6,
		income: req.body.income6,
		fdTax: req.body.fdTax6,
		stTax: req.body.stTax6,
		expenses: req.body.expenses6,
		oDiv:req.body.oDiv6,
		qDiv:req.body.qDiv6,
		combatPay: req.body.combatPay6,
		code: req.body.code6
	}
	var inc7 = {
		inType: req.body.inType7,
		income: req.body.income7,
		fdTax: req.body.fdTax7,
		stTax: req.body.stTax7,
		expenses: req.body.expenses7,
		oDiv:req.body.oDiv7,
		qDiv:req.body.qDiv7,
		combatPay: req.body.combatPay7,
		code: req.body.code7
	}
	var inc8 = {
		inType: req.body.inType8,
		income: req.body.income8,
		fdTax: req.body.fdTax8,
		stTax: req.body.stTax8,
		expenses: req.body.expenses8,
		oDiv:req.body.oDiv8,
		qDiv:req.body.qDiv8,
		combatPay: req.body.combatPay8,
		code: req.body.code8
	}
	//dependents
	var dep1 = {
		depDob: req.body.dep1Dob,
		depStudent: req.body.dep1Student,
		depDisabled: req.body.dep1Disabled,
		depLive: req.body.dep1Live
	}
	var dep2 = {
		depDob: req.body.dep2Dob,
		depStudent: req.body.dep2Student,
		depDisabled: req.body.dep2Disabled,
		depLive: req.body.dep2Live
	}
	var dep3 = {
		depDob: req.body.dep3Dob,
		depStudent: req.body.dep3Student,
		depDisabled: req.body.dep3Disabled,
		depLive: req.body.dep3Live
	}
	var dep4 = {
		depDob: req.body.dep4Dob,
		depStudent: req.body.dep4Student,
		depDisabled: req.body.dep4Disabled,
		depLive: req.body.dep4Live
	}
	var dep5 = {
		depDob: req.body.dep5Dob,
		depStudent: req.body.dep5Student,
		depDisabled: req.body.dep5Disabled,
		depLive: req.body.dep5Live
	}
	var depAdd = function(dep){
		if( dep.depDob.length){ dependents.push(dep); console.log('added '+ dep + ' to dependents.')}else{
			console.log('did not add ' + dep)
		}
	};
	//Push Dependents
	if(req.body.dep1Dob.length){ dependents.push(dep1)};
	if(req.body.dep2Dob.length){ dependents.push(dep2)};
	if(req.body.dep3Dob.length){ dependents.push(dep3)};
	if(req.body.dep4Dob.length){ dependents.push(dep4)};
	if(req.body.dep5Dob.length){ dependents.push(dep5)};
	// Push Incomes
	if(req.body.income1 > 0){ incomes.push(inc1)};
	if(req.body.income2 > 0){ incomes.push(inc2)};
	if(req.body.income3 > 0){ incomes.push(inc3)};
	if(req.body.income4 > 0){ incomes.push(inc4)};
	if(req.body.income5 > 0 || req.body.combatPay5 > 0 ){ incomes.push(inc5)};
	if(req.body.income6 > 0 ){ incomes.push(inc6)};
	if(req.body.oDiv7 > 0 || req.body.qDiv7 > 0){ incomes.push(inc7)};
	if(req.body.income8 > 0){ incomes.push(inc8)}


	var newTP = new taxpayer();

	newTP.firstName = req.body.firstname;
	newTP.lastname = req.body.lastname;
	newTP.email = req.body.email;
	newTP.city = req.body.city;
	newTP.state = req.body.state;
	newTP.zip = req.body.zip;
	newTP.pNumber = req.body.pNumber;
	newTP.filingStatus = req.body.filingStatus;
	newTP.tpDob = req.body.tpDob;
	newTP.numDdep = req.body.numdDep;
	newTP.dependents = dependents;
	newTP.income = incomes;
	newTP.decided = false;
	
	newTP.save(function(err, taxpayer){
		if(err){
			console.log('taxpayer not saved');
			console.log(err);
		}else{
			console.log('taxpayer saved!');
			console.log(taxpayer);
			res.render('success', {taxpayer: taxpayer})
		}
	})
}



exports.newTaxpayers = function(req, res){
	taxpayer.find({})
		.exec(function(err, taxpayers){
			if(err){
				return handleError(res, err);
			}
			if(!taxpayers){
				return res.send(404);
			}else{
				console.log(taxpayers);				
				return res.json(taxpayers);	
			}
					
		});
};

exports.singleTaxpayer = function(req, res){
	taxpayer.findOne({_id:req.params.id}).exec(function(err, taxpayer){
		if(err){
			return handleError(res, err);
		}if(!taxpayer){
			return res.send(404);
		}
		console.log(taxpayer);
		return res.json(taxpayer);
	});	
};


function handleError(res, err){
	return res.send(500, err)
}