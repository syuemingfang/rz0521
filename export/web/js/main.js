require.config({
	paths:{
		jquery: 'jquery-1.9.1.min',
		photoBtn: 'pg_pb',
		fancybox: 'jquery.fancybox',
		ready: 'ready'		
	}
});
require([
	"jquery",
	"photoBtn",
	"fancybox",	
	"ready"
],
function(){}
);