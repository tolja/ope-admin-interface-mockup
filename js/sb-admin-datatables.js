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
                "defaultContent": "<button>Verwalten</button>"
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


});
