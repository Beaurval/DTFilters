# DTFilters

DTFilters allow you to add a toolbar filled with select, in order to filter the columns of your Datatable
# Dependencies
DTFilters require :
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [jQuery] - Javascript librairie
* [Popper] - Popper.js
* [Multiselect] - Create select with checkboxes
* [Datatables] - Pimp your html tables
# Getting Started!
### Installation


Include all files for Bootstrap, Jquery, Popper.js

```html
<!doctype html>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="bootstrap-multiselect.css" type="text/css"/>
    <!-- StyleSheet for DTFilter CSS -->
    <link rel="stylesheet" href="DTFilters.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css">
    <title>Cool table with DTFilter !</title>
  </head>
  <body>
  <div class="container">
    <div id="toolbar"></div>
    <table id="table" class="display" style="width:100%">
    <!-- Your table content here -->
    </table>
</div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
	<script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
 
    <!-- Include the plugin's CSS and JS for multiselect: http://davidstutz.de/bootstrap-multiselect/#getting-started -->
    <script type="text/javascript" src="bootstrap-multiselect.js"></script>
    <!-- DTFilter JS -->
    <script type="text/javascript" src="DTFilters.js"></script>
    <script>
    $(()=>{
        //Simple initialisation of Datatable
        var myDataTable = $("#table").DataTable({});
        $("#table").DTFilters({
                    toolbar: $("#toolbar"),
                    table: myDataTable,
                    showTitle: true,
                    columnsToFilter: [1,3]
                });
        });
    </script>
  </body>
</html>
```



   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [Popper]: <https://popper.js.org/>
   [Multiselect]: <http://davidstutz.de/bootstrap-multiselect/#getting-started>
   [Datatables]: <https://datatables.net/>

