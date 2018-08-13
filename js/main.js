/* This function is used to set $("#page-title") content
   and update css property of the current nav item */

function updateCurrentPage (page) {

	var a = $("nav ul li a[href='"+page+"']");

	a.addClass("currentPage");
	$("#page-title").html(a.html());
}