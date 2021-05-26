$(function () {
  console.log("DOM is ready!");

  $("main > form").submit(function (event) {
    event.preventDefault();
    console.log("Submiting ...");

    const filter = $("#iSearch").val();
    //const filter = iSearch.value;

    if (filter !== "") {
      $("#lResults").empty().hide();
      //lResults.innerHTML = '';

      // GET products?productName_like=queso
      // JSON
      $.getJSON(`products?productName_like=${filter}`, function (data) {
        console.log(data);

        if (data.length > 0) {
          let items = [];

          $.each(data, function (key, p) {
            //console.log(p);
            items.push(`<li class='list-group-item'>
                        <a class='row align-items-center' data-id='${p.id}'>
                        <p class='col-8'>${p.productName}<br/>
                            <small>${p.category.categoryName}</small>
                        </p>
                        <p class='col-3'>$ ${p.unitPrice}</p>
                        <p class='col-1'><i class="bi bi-chevron-double-right"></i></p>
                    </a></li>`);
          });
          //console.log(items);
          $(items.join("")).appendTo("#lResults");

          $("a[data-id]").click(function (event) {
            event.preventDefault();
            console.log(this.dataset["id"]);
            $.getJSON(`products/${this.dataset["id"]}`, function (data) {
              console.log(data);

              $('#exampleModal .modal-body').html(data.productName);

              let myModal = new bootstrap.Modal(
                document.getElementById("exampleModal")
              );
              myModal.show();
            });
          });
          
        } else {
          $("<p>¡No se encontraron datos!</p>").appendTo("#lResults");
        }
        $("#lResults").slideDown(600);
      });
    }
  });
});

// $(document).ready(function (params) {
//    console.log('DOM is ready!');
// });
