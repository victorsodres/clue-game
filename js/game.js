b.cell("each").on("click", function() {
  if (b.cell(this).get() === null)
    b.cell(this).place(playerRed);
  else
    b.cell(this).rid();
});
