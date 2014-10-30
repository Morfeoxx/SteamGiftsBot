$(document).ready(function(){

				$(".checkbox").click(function(){
					$(this).parent().children(".checkbox").removeClass('selected');
					$(this).addClass('selected');
					if ($(this).hasClass('sticky_checkbox')){
						$("input[name='sticky']").val($(this).attr("rel"));
					}else{
						$("input[name='private']").val($(this).attr("rel"));
					}
					if ($(this).hasClass('display_groups')){
						$("select[name='group_id']").fadeIn();
					}else{
						$("select[name='group_id']").fadeOut();
					}
				});			
				$(".post.fade").hover(function () {
					$(this).addClass("over");
				},function () {
					$(this).removeClass("over");
				});
								
				$('.register_submit').click(function(){
					$('#register_form').submit();
					return false;
				});				

				$('.confirm_submit').click(function(){
					if ($(this).hasClass('create_submit')){
						$("input[name='step']").val(3);
					}else{
						$("input[name='step']").val(1);
					}
					$('#confirm_form').submit();
					return false;
				});	
				
				$('.button.toggle_delete').click(function(){
					$('.notification.toggle_delete').toggle();
					return false;
				});			
				
				$('.create_submit').click(function(){
					$('#create_form').submit();
					return false;
				});
				
				$('.button.ban').click(function(){
					$('#submit_ban').submit();
					return false;
				});				

				$('.button.report').click(function(){
					$('#submit_report').submit();
					return false;
				});
				
				$('.notification .confirm_delete_giveaway').click(function(){
					$('#submit_delete_giveaway').submit();
					return false;
				});				
				
				$('.generate_invite_submit').click(function(){
					$('#generate_invite_form').submit();
					return false;
				});
				
				$('.sync_submit').click(function(){
					$('#sync_submit').submit();
					return false;
				});				
				
				$('.discussions .buttons a.edit').click(function(){
					$('#edit_discussion').submit();
					return false;
				});					

				$('.submit_parent_form').click(function(){
					$(this).closest("form").submit();
					return false;
				});	
				
				$('.discussions .buttons a.delete').click(function(){
					$('#delete_discussion').submit();
					return false;
				});

				$('.discussions .buttons a.reopen').click(function(){
					$('#reopen_discussion').submit();
					return false;
				});
				
				$('.discussions .buttons a.action_required').click(function(){
					$('#action_required').submit();
					return false;
				});				
				
				$('.discussions .buttons a.close').click(function(){
					$('#close_discussion').submit();
					return false;
				});
				
				$('.discussions .buttons a.approve').click(function(){
					$('#approve_discussion').submit();
					return false;
				});				
				
				$('.delete_comment').click(function(){
					$("input[name='delete_comment_id']").val($(this).parent().attr("rel"));
					$('#delete_comment').submit();
					return false;
				});					
				
				$('.submit_entry, .remove_entry').click(function(){
					$('#form_enter_giveaway').submit();
					return false;
				});	

				$('.featured .edit_gift_show').click(function(){
					$('.body.markdown').hide();
					$('.body.edit_gift').show();
					return false;
				});
				$('.featured .edit_gift_hide').click(function(){
					$('.body.edit_gift').hide();
					$('.body.markdown').show();
					return false;
				});
				$('.featured .edit_gift_save').click(function(){
					$('#edit_gift').submit();
					return false;
				});					
				
				$('.display_winners').click(function(){
					$(this).parent().parent().next('.winner_container').toggle();
					return false;
				});	
	
				$('.manage .received .option.enabled').click(function(){
					$("input[name='gid']").val($(this).attr("rel"));
					if ($(this).hasClass('selected')){
						$("#received_gift input[name='rid']").val(0);
					}else if ($(this).hasClass('yes')){
						$("#received_gift input[name='rid']").val(2);
					}else{
						$("#received_gift input[name='rid']").val(1);
					}
					$('#received_gift').submit();
					return false;
				});		

				$('.manage .sent .option.enabled').click(function(){
					$("input[name='wid']").val($(this).attr("rel"));
					if ($(this).hasClass('selected')){
						$("#sent_gift input[name='rid']").val(0);
					}else if ($(this).hasClass('yes')){
						$("#sent_gift input[name='rid']").val(1);
					}
					$('#sent_gift').submit();
					return false;
				});		

				$('.manage .delete_entry').click(function(){
					$("input[name='eid']").val($(this).attr("rel"));
					$('#remove_entries').submit();
					return false;
				});					

				$('.absolute_dropdown .heading').click(function(){
					if (!$(this).hasClass('selected')){
						$('.absolute_dropdown .heading').removeClass('selected');
						$('.absolute_dropdown .items').hide();						
						$(this).parent().children(".items").show();
						$(this).addClass('selected')	
					}else{
						$('.absolute_dropdown .heading').removeClass('selected');
						$('.absolute_dropdown .items').hide();						
					}
					return false;
				});

				$('body').click(function() {
					$('.absolute_dropdown .heading').removeClass('selected');
					$('.absolute_dropdown .items').hide();
					$('#navigation ol li').removeClass('open');
					$('#navigation ol li .absolute-dropdown').hide();
				});

				$('.absolute_dropdown').click(function(event){
					event.stopPropagation();
				});
				
				$('.cancel_edit_comment').click(function(){
					$(this).parent().parent().parent().parent().children('.user_body').show();
					$(this).parent().parent().parent().parent().children('.user_edit').hide();
					return false;
				});
				
				$('.comment_reply .edit_comment').click(function(){
					$(this).parent().parent().parent().children('.user_body').hide();
					$(this).parent().parent().parent().children('.user_edit').show();
					return false;
				});
				
				$('.comment_reply .reply_link a').click(function(){
					id=$(this).attr('rel');
					depth=parseInt($(this).attr('class'))+1;
					$("#comment_form #parent_id").val(id);
					$("span.title").html("Add a reply");
					$("span.cancel").show();
					$("#comment_form").insertAfter('.comment#' + id);
					$("#comment_form").addClass('border_container');
					return false;
				});
				$('#comment_form span.cancel a').click(function(){
					$("#comment_form #parent_id").val(0);
					$("span.title").html("Add a comment");
					$("span.cancel").hide();
					$("#comment_form").insertAfter('#comment_location');
					$("#comment_form").removeClass('border_container');
					return false;
				});	
	
				$("li a.arrow").click(function() {
					$(this).parent().siblings().removeClass('open');
					$(this).parent().siblings().children('.relative-dropdown').children('.absolute-dropdown').hide();
					$(this).parent().addClass('open');
					$(this).siblings('.relative-dropdown').children('.absolute-dropdown').show();
					return false;
				});
				
				//Check and uncheck categories while reloading content
				$('.stores li a').click(function(){
					$(this).toggleClass("enabled");
					//loadContent();
					return false;
				});
				
				$(".sales .row").hover(function () {
					

				}, function () {
					$('.absolute_thumbnail').fadeOut();
				});
				$(".sales .row").hoverIntent(function () {
					$('.absolute_thumbnail img').attr('src', 'http://www.steamgifts.com/img/games/sm/' + $(this).attr('rel')  + '.jpg');
					var new_location = -20+(($(this).index()-2)*31);
					$('.absolute_thumbnail').stop(true, true).show().animate({ opacity: 1, top: new_location }, 250);				
				}, function () {
				
				});
				
				
				//$("#navigation .left ol>li").mouseleave(function() {
					//$('#navigation .left ol li').removeClass('open');
					//$('#navigation .left ol li .absolute-dropdown').hide();
				//});

});	