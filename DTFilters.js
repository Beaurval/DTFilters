(function ($) {
    $.fn.DTFilters = function (options) {
        // Déclarations de valeurs par défaut
        var settings = $.extend({
            toolbar: null,
            table: null,
            showTitle: true,
            columnsToFilter: []
        }, options);

        //Ajoute une fonction de filtre sur la datatable
        $.fn.dataTable.ext.search.push(
            function (set, data, dataIndex) {
                let selectList = $(settings.toolbar).find("select");

                for (var i = 0; i < selectList.length; i++) {

                    let select = selectList[i];
                    if (!$(select).val().includes(data[$(select).attr("data-for-column")]))
                        return false;
                }

                return true;
            }
        );

        /***
         * FONCTIONS ----------------------------------
         * */
        //Retourne une liste de mot unique de la colonne
        getWordListOfColumn = (columnIndex) => {
            let arrayStringColumn = [];
            this.find("tr").each(function () {
                let box = $($(this).children()[columnIndex]);
                if (!$(box).is("th"))
                    arrayStringColumn.push(box.text().trim());
            });
            return [...new Set(arrayStringColumn)];
        }
        //Retourn un select qui est remplit avec les données de la colonne
        getSelectForColumn = (columnIndex) => {
            let selectCustom = $("<select style='margin-right: 5px;' id='col-filter-" + columnIndex + "' multiple='multiple'></select>");
            selectCustom.attr("data-for-column", columnIndex)
            let wordList = getWordListOfColumn(columnIndex);

            for (var i = 0; i < wordList.length; i++) {
                selectCustom.append(
                    "<option selected value='" + wordList[i] + "'>" +
                    wordList[i] +
                    "</option > ");
            }

            selectCustom.change(() => {
                settings.table.draw();
            })
            if (settings.showTitle) {
                $("<label for='col-filter-" + columnIndex + "'>" +
                    settings.table.column(columnIndex).header().innerHTML +
                    "</label>");
            }


            return selectCustom;
        }
        /***
         * /FONCTIONS ----------------------------------
         * */


        if (toolbar != null) {
            let container = $("<div class='select-filter-container'></div>");
            for (var i = 0; i < settings.columnsToFilter.length; i++) {
                
                let column = settings.columnsToFilter[i];
                let select = getSelectForColumn(column);
                if (settings.showTitle) {
                    container.append(
                        "<label for='col-filter-" + column + "'>" +
                        $(settings.table.column(column).header()).text().trim()
                        + " : </label>");
                }
                container.append(select);
                $(select).multiselect();
            }
            settings.toolbar.append(container);
        }
    }
})(jQuery)