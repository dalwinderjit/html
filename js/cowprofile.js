var toast = $('.toast');
class Cow {
	
	milking = false;
	editCow(){
	}
	convertToEditForm(){
		console.log('converting..');
		$('.cpinput-disabled').addClass('cpinput');
		$('.cpinput-disabled').removeAttr('disabled');
		$('.cpinput-disabled').removeClass('cpinput-disabled');
		this.hideEditCowButton();
		this.showSaveCowButton();
	}
	disableEditForm(){
		console.log('converting..');
		$('.cpinput').addClass('cpinput-disabled');
		$('.cpinput').attr('disabled',true);
		$('.cpinput-disabled').removeClass('cpinput');
		
	}
	showEditCowButton(){
		$('.editCowBtn').css('display','');
	}hideEditCowButton(){
		$('.editCowBtn').css('display','none');
	}
	showSaveCowButton(){
		$('.saveCowBtn').css('display','block');
	}
	hideSaveCowButton(){
		$('.saveCowBtn').css('display','none');
	}
	saveCowData(){
		this.disableEditForm();
		this.showEditCowButton();
		this.hideSaveCowButton();
	}
	setCowMilking(){
		console.log('hi');
		
		if(this.milking==false){
			$('#confirm>div>div>div.toast-body').removeClass('danger');
			$('#confirm>div>div>div.toast-body').addClass('success');
			$('#confirm>div>div>div.toast-body').html('Cow is set to milking');confirmModal.show();
			this.milking=true;
		}else{
			$('#confirm>div>div>div.toast-body').removeClass('success');
			$('#confirm>div>div>div.toast-body').addClass('danger');
			$('#confirm>div>div>div.toast-body').html('Cow is off from milking');
			confirmModal.show();
			this.milking=false;
		}
	}
	editCalvingDetail(){
		console.log('h');
		//get the calv detail form server
		var ids = ['cd-id','cd-dateofservice','cd-cow-name','cd-bull-semen','cd-date-calved','cd-lactation-number','cd-birth-status','cd-damweight','cd-sex','cd-calf-number','cd-birth-weight','cd-remarks'];
		var values = [23,'12/12/2021','SW-345','SW-456','23/09/2019','45','NORMAL','34 Kg','Male','SW-345','10 kg','ok ok'];
		for(i=0;i<ids.length;i++){
			$('#'+ids[i]).val(values[i]);
		}
	}
};
function setCowMilking(){
	
}
$(document).ready(function(){
	//toast.show();
});