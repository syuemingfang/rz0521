;(function($){
	$.fn.photobutton=function(settings){
		var _defaultSettings={
			bind:'click',
			animate:'none',
			type:'filename',
			name:'_hv',
			attribute:'src',
			size:'100%',		
			speed:2000,
			callback:function(){
				switch(_settings.attribute){
					case 'src':
						$this=$(this);
						var img1=$this.attr('src');
						var img2=$.fn.photobutton.s1(img1,_settings.type,_settings.name);					
						$this.attr('src', img2);
						$(this).bind("mouseleave",function(){									
								var $this = $(this), handler = arguments.callee;
   								$this.unbind('mouseout', handler);
								$this.attr('src', img1);
						});
					break;
					case 'css':
						$this=$(this);
						var img1=$this.css('background-image');
						var img2=$.fn.photobutton.s1(img1,_settings.type,_settings.name);		
						$this.css('background-image',img2);
						$(this).bind("mouseleave",function(){
							var $this = $(this), handler = arguments.callee;
   							$this.unbind('mouseout', handler);
							$this.css('background-image',img1);
						});
						break;
				};
				return false;
			}
		};
		$.fn.photobutton.s1=function(img1,type,name){
			var srcPathArray = img1.split('/');
			var imgFile = srcPathArray[srcPathArray.length-1];
			var imgArray = imgFile.split('.');
			var imgName = imgArray[0];
			var imgExt = imgArray[1];
			var srcPath = img1.split(imgFile , 1);
			switch(type){
				case 'folder':
				return srcPath+ name +'/' + imgName + '.' + imgExt;
				break;
				case 'filename':
				return srcPath + imgName + name +'.' + imgExt;
				break;
				}
		};
		var _settings=$.extend(_defaultSettings,settings);
		return this.each(function(){$(this).bind(_settings.bind,_settings.callback);});

	};
})(jQuery);