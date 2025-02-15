// Copyright (c) 2025, Alex Nagy and contributors
// For license information, please see license.txt

frappe.ui.form.on("Article", {
  refresh: function (frm) {
    frm.add_custom_button("Back to Home", () => {
      frappe.set_route("/");
    }, ('Mew'));
    frm.add_custom_button("Message to Mom", () => {
      frappe.msgprint({
        title: __('Notification'),
        indicator: 'green',
        message: __('Hi Mom!')
      });
    });
    frm.add_custom_button("Ping", () => {
      frappe.call('ping')
        .then(r => {
          console.log(r)
          // {message: "pong"}
        })
    })
    frm.add_custom_button("Show Tour", () => {
      frm.tour.init('How to fill out an Article form').then(() => frm.tour.start());
    })
    frm.add_custom_button("Reset", () => {
      frm.set_value({
        article_name: "",
        image: null,
        isbn: "",
        author: "",
        publisher: "",
        status: "Available",
        description: "",
      })
    });
  },
});
