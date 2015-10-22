b.cell("each").on("click", function() {
  if (b.cell(this).get()===null) {
    b.cell(this).place(p1.clone());
  }
});
