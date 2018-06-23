// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable( {
         "columnDefs": [ {
             "targets": -1,
             "data": null,
             "defaultContent": "<button>Verwalten</button>"
         } ]
     } );
     $('#contextTable').DataTable( {
            "columnDefs": [ {
                "targets": -1,
                "data": null,
                "defaultContent": "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#placeholderModal'>Detailseite</button>"
            } ]
        } );

        $('#userTable').DataTable( {
               "columnDefs": [ {
                   "targets": -1,
                   "data": null,
                   "defaultContent": "<button>Verwalten</button>"
               } ]
           } );

           $('#editSurveyTable').DataTable( {
                  "columnDefs": [ {
                      "targets": -1,
                      "data": null,
                      "defaultContent": "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#editSurveyModal'>Verwalten</button>"
                  } ]
              } );

              $('#editContextTable').DataTable( {
                     "columnDefs": [ {
                         "targets": -1,
                         "data": null,
                         "defaultContent": "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#editContextModal'>Verwalten</button>"
                     } ]
                 } );

                 $('#editUserTable').DataTable( {
                        "columnDefs": [ {
                            "targets": -1,
                            "data": null,
                            "defaultContent": "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#editUserModal'>Verwalten</button>"
                        } ]
                    } );

                    $('#homeDataTable').DataTable( {
                           "columnDefs": [ {
                               "targets": -1,
                               "data": null,
                               "defaultContent": "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#placeholderModal'>Detailseite</button>"
                           } ]
                       } );

});
