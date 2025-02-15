frappe.pages['library-guest-page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Library Guest Page',
		single_column: true
	});
}