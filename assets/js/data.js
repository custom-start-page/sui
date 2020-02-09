new CustomStartStorage().get()
  .then(data => {
    $(document).ready(function(){
      var mysource = $('#links-template').html();
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      $('#links').html(myresult);
    });

    $(document).ready(function(){
      var mysource = $('#apps-template').html();
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      $('#apps').html(myresult);
    });

    var data_providers = "providers.json";

    $(document).ready(function(){
      $.getJSON(data_providers,
        function (data) {
          var mysource = $('#providers-template').html();
          var mytemplate = Handlebars.compile(mysource);
          var myresult = mytemplate(data)
          $('#providers').html(myresult);
      });
    });
  });

