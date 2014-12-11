var appOptions = {"levelId":"1","sendToPhone":true,"scriptId":6,"levelGameName":"Flappy","level":{"video_key": "flappy_intro","skin":"flappy","puzzle_number":1,"stage_total":10,"edit_blocks":null,"edit_blocks_success":"You successfully edited the blocks.","instructions":"Attach a block to the \"when click\" block, then press \"Run\". Click or tap the screen to move Flappy to the target."},"skinId":"flappy","callouts":"[]","createCallouts":"function() {\n  $.fn.qtip.zindex = 500;\n  this.callouts.every(function(callout) {\n    var selector = callout.element_id; // jquery selector.\n    if ($(selector).length \u003C= 0) { console.log(\"Couldn't find callout target.\"); return true;}\n\n    var defaultConfig = {\n      content: {\n        text: callout.localized_text,\n        title: {\n          button: $('\u003Cdiv class=\"tooltip-x-close\"/\u003E').append($('\u003Cimg src=\"/assets/x_button.png\"/\u003E'))\n        }\n      },\n      style: {\n        classes: \"\",\n        tip: {\n          width: 20,\n          height: 20\n        }\n      },\n      position: {\n        my: \"bottom left\",\n        at: \"top right\"\n      },\n      hide: {\n        event: 'click mousedown touchstart'\n      },\n      show: false // don't show on mouseover\n    };\n\n    var customConfig = $.parseJSON(callout.qtip_config);\n    var config = $.extend(true, {}, defaultConfig, customConfig);\n    config.style.classes = config.style.classes.concat(\" cdo-qtips\");\n\n    var calloutDomElement = $(selector).qtip(config);\n    calloutDomElement.qtip('show');\n\n    return true;\n  });\n}","onInitialize":"function() {\n  this.createCallouts();\n  onInitializeListeners.forEach(function(listener) {\n    listener();\n  });\n  \n}","locale":"en_us","containerId":"blocklyApp","baseUrl":"/blockly/","cacheBust":false}
