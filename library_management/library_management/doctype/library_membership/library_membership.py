# Copyright (c) 2025, Alex Nagy and contributors
# For license information, please see license.txt

import frappe
import frappe.utils
from frappe.model.docstatus import DocStatus
from frappe.model.document import Document


class LibraryMembership(Document):
	def before_submit(self):
		exists = frappe.db.exists(
			"Library Membership",
			{
				"library_member": self.library_member,
				"docstatus": DocStatus.submitted(),
				"to_date": (">", self.from_date),
			},
		)
		if exists:
			frappe.throw("There is an active membership for this member")

		loan_period = frappe.db.get_single_value("Library Settings", "loan_period")
		if self.to_date is None:
			self.to_date = frappe.utils.add_days(self.from_date, loan_period or 30)
