timeoutID = setTimeout(refresh, 120000);

function refresh() {
	$('#wc05_scheduleBlock').load('ajax/http://www.dota2.com/international/watch/July9/ #wc05_scheduleBlock');
}