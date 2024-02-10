console.log("HELP");
$(function(){
  $("#env1_photo").on({ mouseenter: function(){
    $(this).attr('src','img/env1_o.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/env1.png');
  }
  });



  $("#bash_photo").on({ mouseenter: function(){
    $(this).attr('src','img/env3_o.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/env3.png');
  }
  });
  


  $("#github_photo").on({ mouseenter: function(){
    $(this).attr('src','img/env2_o.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/env2.png');
  }
  });
});