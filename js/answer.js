var _generated = new Array();
var _number_loaded = 0;
function randomnumber(aNumber)
{  
	var myRand=Math.round(aNumber*Math.random());
	if($.inArray(myRand,_generated) == -1)
        {
                _generated.push(myRand);
		return myRand;
        }
	else
        {
		return randomnumber(aNumber);
        }
}
function display_rune_meaning(html_string)
{
        $("#rune_meaning").html(html_string);
}
function write_rune_in_cells(cell_ids)
{
   $.ajax({
        type: "GET",
        url: "./data/data.xml",
        dataType: /MSIE\s+/.test(navigator.appVersion) ? 'text' : 'xml',
        success: function(_xml)
        {
                var data;
                    if ( typeof _xml == 'string')
                    {
                            data = new ActiveXObject( 'Microsoft.XMLDOM');
                            data.async = false;
                            data.loadXML( _xml);
                    } else
                    {
                            data = _xml;
                    } 
                var runes =  $(data).find('rune');
                $.each(cell_ids, function()
                {
                        var cell_id = this;
                        var rune_number = randomnumber(runes.size()-1);
                        var rune_name = runes.eq(rune_number).find("rune_name").text();
                        var rune_image = runes.eq(rune_number).find("rune_image").text();
                        var rune_meanings = runes.eq(rune_number).find("rune_meanings").text();
                        //rune_meanings = rune_meanings.replace(/\s+/g, " ");
                        $("#"+cell_id+"a").html(rune_name);
                        $("#"+cell_id).html('<table><tr><td><img class="rune_image" title="'+rune_meanings+'" width="1px" src="./images/'+rune_image+'"></td></tr></table>');      
                });
                $(".rune_image").load(function () {
                        _number_loaded++;
						$(this).attr("alt",$(this).attr("title"));
                        if(_number_loaded == cell_ids.length)
                        {
                                var _rune_images = $(".rune_image");
                                _rune_images.hide();
                                _rune_images.attr("width",50);
                                _rune_images.show("slow");
                        }
                });
 
        }
    });
}
$(document).ready(function()
{
        var spread_num = window.location.href.match(/\?spread=([0-9]+)/) ? parseInt(RegExp.$1) : 0;
        if(spread_num > 4)
        {
                alert("You must choose spread!");
                return;
        }
        var _cells = null;
        switch(spread_num)
        {
               case 0:
                _cells = new Array("t2","t4","t5","t6","t8");    
               break;
               case 1:
                _cells = new Array("t2","t4","t6","t8");    
               break;
               case 2:
                _cells = new Array("t1","t3","t5");    
               break;
               case 3:
                _cells = new Array("t4","t5","t6");    
               break;
               case 4:
                _cells = new Array("t5");    
               break;
        
        }
        $("img.rune_image").live("click", function(){
                display_rune_meaning($(this).attr("alt"));
        });
        write_rune_in_cells(_cells);
});